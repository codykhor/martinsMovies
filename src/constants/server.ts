import {Genre} from "@/lib/types";
import {getGenreList} from "@/services/movie";

let genreCache: { [key: number]: string } | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export async function getGenreMap(): Promise<{ [key: number]: string }> {
    if (genreCache && cacheTimestamp && Date.now() - cacheTimestamp < CACHE_DURATION) {
        return genreCache;
    }

    try {
        const response = await getGenreList();
        const genres: Genre[] = response.genres;

        genreCache = {};
        genres.forEach(genre => {
            genreCache![genre.id] = genre.name;
        });

        cacheTimestamp = Date.now();
        return genreCache;
    } catch (error) {
        console.error('Failed to fetch genres from TMDB:', error);

        // Basic genre mapping as fallback
        return {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Science Fiction",
            10770: "TV Movie",
            53: "Thriller",
            10752: "War",
            37: "Western"
        };
    }
}

export async function mapGenreIdsToNames(genreIds: number[]): Promise<string[]> {
    const genreMap = await getGenreMap();
    return genreIds.map(id => genreMap[id] || `Unknown (${id})`);
}
