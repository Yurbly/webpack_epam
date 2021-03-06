import {SyntheticEvent} from "react";

export interface IMovieProps {
    id: string,
    title: string,
    poster_path?: string,
    genres?: Array<string>,
    release_date?: string,
    rating?: number | string,
    overview?: string,
    runtime?: number | string,
}

export interface IMovieCardProps {
    data: IMovieProps,
    openDeleteModal(e: SyntheticEvent): void,
    openEditModal(e: SyntheticEvent): void,
    onClick(): void
}

export interface IMoviesListProps {
    movies: Array<IMovieProps>,
    setActiveMovie(movie: IMovieProps): void
}
