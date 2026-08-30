import { Track } from "../types/Track";
import { cacheLife } from 'next/cache'


export default async function fetchLastFmData(): Promise<Track> {
    'use cache'
    cacheLife("seconds")
    const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=chiraglol5&api_key=${process.env.LAST_FM_API_KEY}&format=json&limit=1`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data from Last.fm API');
    }

    const data = await res.json();

    const currentlyPlaying = data.recenttracks.track[0]['@attr']?.nowplaying === 'true' ? true : false;
    const lastTrack = data.recenttracks.track[0];

    const track: Track = {
        currentlyPlaying: currentlyPlaying,
        name: lastTrack.name,
        artist: lastTrack.artist['#text'],
        album: lastTrack.album['#text'],
        url: lastTrack.url,
        image: lastTrack.image[3]['#text'],
        timestamp: currentlyPlaying ? undefined : parseInt(lastTrack.date.uts) * 1000,
    }

    return track;
}