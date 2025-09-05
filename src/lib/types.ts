export type Movie = {
    id: number;
    title: string;
    // genre: string[];
    overview: string;
    release_date: string;
    vote_average: number;
    poster_path: string | null;
    imdb_id?: string | null;
}

export interface NavItem {
    label: string;
    path: string;
    count?: number;
}

export const navItems: NavItem[] = [
    { label: "Home", path: "/", count: 4 },
    { label: "Pages", path: "/pages", count: 11 },
    { label: "Movies & TV Shows", path: "/movies", count: 9 },
    { label: "Blog", path: "/blog", count: 4 },
    { label: "Contact Us", path: "/contact" },
];
