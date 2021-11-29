import {PayloadAction} from "types/store";
import {MoviesActionTypes} from "./actionTypes";
import {genresNames} from "consts/genres";
import sortTypes from "consts/sortTypes";

export interface IMovie {
    id: string,
    title: string,
    poster_path?: string,
    genres?: Array<string>,
    release_date?: string,
    vote_average?: number | string,
    overview?: string,
    runtime?: number | string,
}

export interface IFilters {
    tab?: genresNames,
    searchText?: string
}

export interface IMoviesStateData {
    movies?: Array<IMovie>,
    filters?: IFilters,
    sortBy?: sortTypes | ""
}

export interface IMoviesState {
    data: IMoviesStateData,
    isLoading?: boolean;
    error?: string | null
}

export const defaultFilters: IFilters = {
    tab: genresNames.all,
    searchText: ""
}

export const initialState: IMoviesState = {
    data: {
        movies: [],
        filters: defaultFilters,
        sortBy: ""
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
                    },
                    sortBy: payload.data.sortBy || state.data.sortBy
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
