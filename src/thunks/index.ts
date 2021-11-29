import {failure, request, success} from "store/movies/actions";
import NetworkController, {IParams, methods, searchByOpts} from "controllers/NetworkController";
import {Dispatch} from "redux";
import {defaultFilters, IFilters} from "store/movies/reducer";
import {genresNames} from "consts/genres";
import {sortOrder} from "consts/sortTypes";

export const getMoviesRequest = ({filters, sortBy}: {filters?: IFilters, sortBy?: string} = {}) => {
    return (dispatch: Dispatch) => {
        const finalFilters = filters || defaultFilters;
        const payload = {data:{filters: finalFilters, sortBy}};
        dispatch(request(payload));

        const params: IParams = {};
        if (finalFilters.tab && finalFilters.tab !== genresNames.all) {
            params.filter = finalFilters.tab;
        }
        if (finalFilters.searchText) {
            params.search = finalFilters.searchText;
            params.searchBy = searchByOpts.title;
        }
        if (sortBy) {
            params.sortBy = sortBy;
            params.sortOrder = sortOrder.desc;
        }
        return NetworkController
            .request({method: methods.GET, url: "/movies", params})
            .then(response => dispatch(success({data: {movies: response.data.data}})))
            .catch(e => dispatch(failure(e)));
    }
};
