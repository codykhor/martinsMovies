import MovieCard from "@/components/MovieCard";
import HeroBanner from "@/components/HeroBanner";
import {Movie} from "@/lib/types";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";

async function getMovies(q: string | null, page: number) {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies${q ? `?q=${q}&page=${page}` : `?page=${page}`}`;
    const res = await fetch(url, {cache: "no-store"});
    return res.json();
}

export default async function Home({searchParams}: { searchParams: Promise<{ q?: string; page?: string }> }) {
    const params = await searchParams;
    const q = params.q ?? null;
    const page = Number(params.page ?? 1);
    const data = await getMovies(q, page);

    return (
        <div className="min-h-screen bg-gray-50">
            <HeroBanner title="Martin's Movies"/>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-22 py-22">
                <div className="max-w-[470px] mx-auto">
                    <SearchBar/>
                </div>
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-4">
                        {data.results.map((movie: Movie) => <MovieCard key={movie.id} movie={movie}/>)}
                    </div>
                    <Pagination page={data.page} totalPages={Math.min(data.total_pages, 500)}
                                query={q ?? undefined}/>
                </div>
            </div>
        </div>
    );
}
