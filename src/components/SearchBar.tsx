"use client"

import {FormEvent, useEffect, useState} from "react";
import {useSearchParams, useRouter} from "next/navigation";
import {LoaderCircle} from "lucide-react"

export default function SearchBar() {
    const router = useRouter();
    const params = useSearchParams();
    const [query, setQuery] = useState(params.get('q') || '');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setQuery(params.get('q') || '');
        setIsLoading(false); // Reset loading state when params change (new results loaded)
    }, [params]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const trimmedQuery = query.trim();
        setIsLoading(true);

        if (trimmedQuery) {
            router.push(`/?q=${trimmedQuery}&page=1`);
        } else {
            router.push(`/?page=1`);
        }
    }

    return (
        <form className="flex justify-center my-6" onSubmit={handleSubmit}>
            <div className="relative w-full max-w-2xl">
                <input
                    className="w-full rounded-full px-5 py-3 border-2 search-input focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search movies by keyword"
                    disabled={isLoading}
                />
                {isLoading && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <div className="animate-spin"><LoaderCircle color={"purple"}/></div>
                    </div>
                )}
            </div>
        </form>
    )
}