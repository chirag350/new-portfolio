import { cacheLife } from "next/cache";

export interface ActivityMetric {
  name?: string;
  total_seconds?: number;
  percent?: number;
  digital?: string;
  text?: string;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export interface WakaTimeActivityData {
  username?: string;
  user_id?: string;
  start?: string;
  end?: string;
  status?: string;
  total_seconds?: number;
  daily_average?: number;
  days_including_holidays?: number;
  range?: string;
  human_readable_range?: string;
  human_readable_total?: string;
  human_readable_daily_average?: string;
  is_coding_activity_visible?: boolean;
  is_other_usage_visible?: boolean;
  editors?: ActivityMetric[];
  languages?: ActivityMetric[];
  machines?: ActivityMetric[];
  projects?: ActivityMetric[];
  operating_systems?: ActivityMetric[];
  categories?: ActivityMetric[];
}

export interface WakaTimeActivityResponse {
  data?: WakaTimeActivityData;
}

export default async function fetchHackaTimeStats(): Promise<WakaTimeActivityResponse> {
  'use cache';
  cacheLife("minutes")

  // get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const r = await fetch(`https://hackatime.hackclub.com/api/hackatime/v1/users/current/stats/last_7_days`, {
    headers: {
      Authorization: `Bearer ${process.env.HACKATIME_API_KEY}`,
    }
  })

  const data = await r.json();

  if (!r.ok) {
    return {
      data: {
        status: "Error fetching data",
      }
    }
  }

  return data as WakaTimeActivityResponse;
}