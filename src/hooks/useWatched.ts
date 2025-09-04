"use client"

import { useEffect, useState } from "react";

export function useWatched() {
    const [watched, setWatched] = useState<Set<number>>(new Set());

    useEffect(() => {
        const stored = localStorage.getItem("watchedMovieIds");
        if (stored) {
            setWatched(new Set(JSON.parse(stored)));
        }
    }, []);

    function toggle(id: number) {
        const next = new Set(watched);
        if (next.has(id)) {
            next.delete(id);
        } else {
            next.add(id);
        }
        setWatched(next);
        localStorage.setItem("watchedMovieIds", JSON.stringify([...next]));
    }

    function isWatched(id: number) {
        return watched.has(id);
    }

    return { isWatched, toggle };
}