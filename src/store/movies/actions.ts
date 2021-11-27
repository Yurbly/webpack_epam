import { ActionCreator } from 'redux';
import {RootState} from "store/index";
import {IMovie, IMoviesState} from "store/movies/reducer";
import {PayloadAction} from "src/types/store";
import {MoviesActionTypes} from "store/movies/actionTypes";

export const getMoviesData = (state: RootState): Array<IMovie> => state.movies.data;

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
