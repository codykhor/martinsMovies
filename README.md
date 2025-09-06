# Martin's Movies

A Next.js movie discovery app powered by The Movie Database (TMDB) API.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   Create a `.env.local` file in the root directory with:
   ```
   TMDB_BASE_URL=https://api.themoviedb.org/3
   TMDB_V4_TOKEN=your_tmdb_v4_access_token_here
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

3. **Get TMDB API Token:**
    - Sign up at [The Movie Database](https://www.themoviedb.org/)
    - Paste it as the `TMDB_V4_TOKEN` value


4. **Run the app:**
   ```bash
   npm run dev
   ```

## Features

- Browse popular movies
- Search for movies by keyword
- View movie details via IMDB
- Responsive design with modern UI
