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