import {PayloadAction} from "types/store";
import {MoviesActionTypes} from "./actionTypes";

export interface IMovie {
    id: string,
    title: string,
    poster_path?: string,
    genres?: Array<string>,
    release_date?: string,
    rating?: number | string,
    overview?: string,
    runtime?: number | string,
}

export type IMoviesState = {
    data: Array<IMovie>;
    isLoading: boolean;
    error: string | null
};

export const initialState: IMoviesState = {
    data: [],
    isLoading: false,
    error: null
};

export const moviesReducer = (
    state: IMoviesState = initialState,
    action: PayloadAction<Array<IMovie>>
): IMoviesState => {
    const {payload, type} = action;
    switch (type) {
        case MoviesActionTypes.MOVIES_REQUEST_DATA:
            return {
                ...state,
                isLoading: true
            };
        case MoviesActionTypes.MOVIES_SUCCESS_DATA:
            return {
                data: payload,
                isLoading: false,
                error: null
            };
        case MoviesActionTypes.MOVIES_FAILURE_DATA:
            return {
                ...state,
                isLoading: false,
                error: null
            };
        default:
            return state;
    }
}
