import { getImdbId, listPopularMovies, searchMovies, Movie } from "@/services/movie";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q') || '';
    const page = Number(searchParams.get('page') || '1');

    const base = query ? await searchMovies(query, page) : await listPopularMovies(page)

    const results = await Promise.all(
        base.results.map(async (movie: Movie) => ({
            ...movie,
            imdb_id: await getImdbId(movie.id)
        }))
    )

    return NextResponse.json({
        ...base,
        results
    })
}