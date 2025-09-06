export type TMDBMovie = {
    id: number;
    title: string;
    genre_ids: number[];
    overview: string;
    release_date: string;
    vote_average: number;
    poster_path: string | null;
}

export type Movie = {
    id: number;
    title: string;
    genres: string[];
    overview: string;
    release_date: string;
    vote_average: number;
    poster_path: string | null;
    imdb_id?: string | null;
}

export type Genre = {
    id: number;
    name: string;
}

export interface NavItem {
    label: string;
    path: string;
    count?: number;
}