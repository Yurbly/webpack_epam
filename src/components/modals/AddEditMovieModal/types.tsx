export interface IMovieProps {
    title: string,
    poster_path?: string,
    genres?: string | Array<string>,
    release_date?: string,
    rating?: number | "",
    overview?: string,
    runtime?: number | ""
}

export interface ICustomProps {
    onClose(): void,
    data?: IMovieProps,
    onConfirm(): void
}
