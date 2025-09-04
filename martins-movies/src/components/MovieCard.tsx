"use client"

import { Movie } from "@/lib/Movie";
import { useWatched } from "@/hooks/useWatched";
import Image from "next/image";
import { PlayIcon, StarIcon } from "./libraryIcons";

export default function MovieCard({ movie }: { movie: Movie }) {
    const { isWatched, toggle } = useWatched();
    const watched = isWatched(movie.id);
    const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null;

    return (
        <div className="group relative bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300">
            <div className="relative bg-gray-100">
                {poster ? (
                    <Image
                        src={poster}
                        alt={movie.title}
                        width={500}
                        height={750}
                        className="w-full aspect-[2/3] object-cover"
                        priority
                    />
                ) : (
                    <div className="w-full aspect-[2/3] bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No Image</span>
                    </div>
                )}

                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all duration-300">
                    <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-purple-700">
                        <PlayIcon className="h-6 w-6 text-white" />
                    </button>
                </div>
            </div>

            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{movie.title}</h3>
                <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <span className="ml-1 text-sm text-gray-600">{movie.vote_average.toFixed(1)}/10</span>
                    </div>
                    <span className="text-sm text-gray-500">{movie.release_date.split('-')[0]}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => toggle(movie.id)}
                        className={`px-3 py-1 rounded text-sm ${watched
                            ? "bg-emerald-500 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                    >
                        {watched ? "Watched" : "Mark watched"}
                    </button>
                    <a
                        href={movie.imdb_id ? `https://www.imdb.com/title/${movie.imdb_id}/` : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-primary text-white rounded text-sm hover:bg-primary-dark"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}