import {failure, request, success} from "store/movies/actions";
import NetworkController, {IParams, methods} from "controllers/NetworkController";
import {Dispatch} from "redux";
import {defaultFilters, IFilters} from "store/movies/reducer";
import {genresNames} from "consts/genres";

export const getMoviesRequest = (filters: IFilters) => {
    return (dispatch: Dispatch) => {
        const finalFilters = filters || defaultFilters;
        dispatch(request({data:{filters: finalFilters}}));

        const params: IParams = {};
        if (finalFilters.tab && finalFilters.tab !== genresNames.all) {
            params.filter = finalFilters.tab;
        }
        if (finalFilters.searchText) {
            params.search = finalFilters.searchText;
        }
        return NetworkController
            .request({method: methods.GET, url: "/movies", params})
            .then(response => dispatch(success({data: {movies: response.data.data}})))
            .catch(e => dispatch(failure(e)));
    }
};
