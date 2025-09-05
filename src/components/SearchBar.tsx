"use client"

import {FormEvent, useEffect, useState} from "react";
import {useSearchParams, useRouter} from "next/navigation";

export default function SearchBar() {
    const router = useRouter();
    const params = useSearchParams();
    const [query, setQuery] = useState(params.get('q') || '');

    useEffect(() => {
        setQuery(params.get('q') || '');
    }, [params]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const trimmedQuery = query.trim();
        if (trimmedQuery) {
            router.push(`/?q=${trimmedQuery}&page=1`);
        } else {
            router.push(`/?page=1`);
        }
    }

    return (
        <form className="flex justify-center my-6" onSubmit={handleSubmit}>
            <input className="w-full max-w-2xl rounded-full px-5 py-3 border-2 search-input focus:outline-none"
                   value={query}
                   onChange={e => setQuery(e.target.value)} placeholder="Search movies by keyword"/>
        </form>
    )
}