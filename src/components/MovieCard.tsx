"use client"

import { Movie } from "@/lib/types";
import { useWatched } from "@/hooks/useWatched";
import Image from "next/image";
import { PlayIcon, StarIcon } from "./libraryIcons";
import { Play } from "lucide-react";

export default function MovieCard({ movie }: { movie: Movie }) {
    const { isWatched, toggle } = useWatched();
    const watched = isWatched(movie.id);
    const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null;

    return (
        <div
            className="group relative cursor-pointer bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 w-full max-w-[470px] md:max-w-[350px] mx-auto flex flex-col h-[700px]">
            {/* Image Section - Fixed height portion of card */}
            <div className="relative bg-gray-100 w-full h-[350px] md:aspect-square flex-shrink-0">
                {poster ? (
                    <Image
                        src={poster}
                        alt={movie.title}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No Image</span>
                    </div>
                )}
            </div>

            {/* Info Section - Remaining space */}
            <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between min-h-0">
                <div className="flex-1 min-h-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 mb-2 line-clamp-2">{movie.title}</h3>
                    <div className="flex items-center space-x-2 py-1 mb-3">
                        <div className="flex justify-between w-full">
                            <div className="flex items-center">
                                <StarIcon className="text-yellow-400" />
                                <span className="text-sm text-gray-600">{movie.vote_average.toFixed(1)}/10</span>
                            </div>
                            <span className="text-sm">{movie.genres.slice(0, 2).join(", ")}</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-base text-gray-500 line-clamp-5">
                            {movie.overview}
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                    <a
                        href={movie.imdb_id ? `https://www.imdb.com/title/${movie.imdb_id}/` : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 sm:px-4 py-2 bg-primary text-white rounded text-xs sm:text-sm font-semibold hover:bg-primary-dark"
                    >
                        DETAILS
                    </a>
                    <button
                        onClick={() => toggle(movie.id)}
                        className={`px-3 py-1 md:py-2 font-semibold rounded cursor-pointer text-xs sm:text-sm ${watched
                            ? "bg-indigo-900/75 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                    >
                        {watched ? "Watched" : "Mark as Watched"}
                    </button>
                </div>
            </div>

            <button
                className="absolute top-1/2 right-8 transform -translate-y-1/2 w-[60px] h-[60px] bg-primary rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 shadow-[0_3px_15px_3px_rgba(128,0,128,0.4)] z-10"
            >
                <Play fill="white" width={20} height={20} strokeOpacity={0}/>
            </button>
        </div>
    );
}