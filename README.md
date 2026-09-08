# Chirag's Portfolio

Personal portfolio website for me, built with Next.js and TypeScript. It showcases projects, contact links, coding activity, and recently played music.

## Tech Stack

- Next.js 16
- React 19 and TypeScript
- Tailwind CSS 4
- Zustand for client state
- Hackatime and Last.fm APIs for live stats

## Getting Started

### Prerequisites

- Node.js
- pnpm

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env` file in the project root:

```env
HACKATIME_API_KEY=your_hackatime_api_key
LAST_FM_API_KEY=your_last_fm_api_key
```

## Scripts

```bash
pnpm dev       # Start the development server
pnpm build     # Create a production build
pnpm start     # Start the production server
pnpm lint      # Run ESLint
```

## Project Structure

- `app/` contains the application shell, page, and global styles.
- `src/components/` contains the portfolio sections and navigation components.
- `src/lib/` contains API data fetching helpers.
- `public/images/` contains static images used by the site.


## AI Usage
One of the goals of this project was to avoid AI usage as much as possible. Hence, AI was majorly used only to draft project descriptions and other text like this README (though I'm the one writing this disclosure).

Copilot autocomplete was also used, although only for repetitive code.
