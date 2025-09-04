import { getImdbId, listPopularMovies, searchMovies, Movie } from "@/lib/Movie";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get('q') || '';
    const page = Number(searchParams.get('page') || '1');

    const base = q ? await searchMovies(q, page) : await listPopularMovies(page)

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