import {IMovieProps} from "components/movie/movies";

export interface ICustomModalProps {
    onClose(): void,
    data?: IMovieProps,
    onConfirm(): void
}
