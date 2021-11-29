export interface IMovieCardData {
        id: string,
        title: string,
        genres: Array<string>,
        poster_path: string,
        release_date: string
}

export interface IMovieCardProps {
        data: IMovieCardData
}

export interface IMoviesListProps {
    movies: Array<IMovieCardData>
}
