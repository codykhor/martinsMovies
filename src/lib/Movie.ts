const BASE = process.env.TMDB_BASE_URL;
const AUTH = `Bearer ${process.env.TMDB_V4_TOKEN}`;

async function tmdb(path: string) {
    const res = await fetch(`${BASE}${path}`, {
        headers: {
            Authorization: AUTH,
            accept: "application/json"
        }
    })
    if (!res.ok) {
        throw new Error(`Failed to fetch data from TMDB: ${res.status} ${res.statusText}`);
    }
    return res.json();
}

export async function listPopularMovies(page = 1) {
    return tmdb(`/movie/popular?language=en-US&page=${page}`);
}

export async function searchMovies(query: string, page = 1) {
    return tmdb(`/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=${page}&include_adult=false`);
}

export async function getImdbId(movieId: number) {
    const data = await tmdb(`/movie/${movieId}/external_ids`);
    return data.imdb_id;
}