import { ActionCreator } from 'redux';
import {RootState} from "store/index";
import {IMovie, IMoviesState, IMoviesStateData} from "store/movies/reducer";
import {PayloadAction} from "src/types/store";
import {MoviesActionTypes} from "store/movies/actionTypes";
import {genresNames} from "consts/genres";

export const getMovies = (state: RootState): Array<IMovie> => state.movies.data.movies;

export const getMoviesSearchText = (state: RootState): string => state.movies.data.filters.searchText;

export const getMoviesTabFilter = (state: RootState): genresNames => state.movies.data.filters.tab;

export const getMoviesSort = (state: RootState): string => state.movies.data.sortBy;

export const getMoviesData = (state: RootState): IMoviesStateData => state.movies.data;

export const request: ActionCreator<PayloadAction<IMoviesState>> = (payload) => ({
 type: MoviesActionTypes.MOVIES_REQUEST_DATA,
 payload,
});

export const success: ActionCreator<PayloadAction<IMoviesState>> = (payload) => {
 return ({
  type: MoviesActionTypes.MOVIES_SUCCESS_DATA,
  payload,
 });
}

export const failure: ActionCreator<PayloadAction<IMoviesState>> = (payload) => ({
 type: MoviesActionTypes.MOVIES_FAILURE_DATA,
 payload,
});
