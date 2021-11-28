import {PayloadAction} from "types/store";
import {MoviesActionTypes} from "./actionTypes";
import {genresNames} from "consts/genres";

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

export interface IFilters {
    tab?: genresNames,
    searchText?: string
}

export interface IMoviesState {
    data: {
        movies: Array<IMovie>,
        filters: IFilters
    },
    isLoading: boolean;
    error: string | null
}

export const defaultFilters: IFilters = {
    tab: genresNames.all,
    searchText: ""
}

export const initialState: IMoviesState = {
    data: {
        movies: [],
        filters: defaultFilters
    },
    isLoading: false,
    error: null
};

export const moviesReducer = (
    state: IMoviesState = initialState,
    action: PayloadAction<IMoviesState>
): IMoviesState => {
    const {payload, type} = action;
    switch (type) {
        case MoviesActionTypes.MOVIES_REQUEST_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    filters: {
                        ...state.data.filters,
                        ...payload.data.filters
                    }
                },
                isLoading: true
            };
        case MoviesActionTypes.MOVIES_SUCCESS_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    movies: payload.data.movies
                },
                isLoading: false,
                error: null
            };
        case MoviesActionTypes.MOVIES_FAILURE_DATA:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            };
        default:
            return state;
    }
}