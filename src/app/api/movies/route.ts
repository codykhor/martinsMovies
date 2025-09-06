import { getImdbId, listPopularMovies, searchMovies } from "@/services/movie";
import { Movie, TMDBMovie } from "@/lib/types";
import { mapGenreIdsToNames } from "@/constants/server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q') || '';
    const page = Number(searchParams.get('page') || '1');

    const base = query ? await searchMovies(query, page) : await listPopularMovies(page)

    const results = await Promise.all(
        base.results.map(async (movie: TMDBMovie): Promise<Movie> => ({
            id: movie.id,
            title: movie.title,
            genres: await mapGenreIdsToNames(movie.genre_ids),
            overview: movie.overview,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            poster_path: movie.poster_path,
            imdb_id: await getImdbId(movie.id)
        }))
    )

    return NextResponse.json({
        ...base,
        results
    })
}