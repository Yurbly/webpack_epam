import {failure, request, success} from "store/movies/actions";
import NetworkController, {IParams, methods, searchByOpts} from "controllers/NetworkController";
import {Dispatch} from "redux";
import {defaultFilters, IFilters, IMoviesState, IMoviesStateData} from "store/movies/reducer";
import {genresNames} from "consts/genres";
import sortTypes, {sortOrder} from "consts/sortTypes";

interface IGetMoviesRequest {
    moviesState: IMoviesStateData,
    filters?: IFilters,
    sortBy?: sortTypes
}

export const getMoviesRequest = ({moviesState, filters, sortBy}: IGetMoviesRequest) => {
    return (dispatch: Dispatch) => {
        const payload: IMoviesState = {
            data:{
                filters: filters || {},
                sortBy
            }
        };
        dispatch(request(payload));

        const prelimParams: IParams = {
            filter: filters && filters.tab || moviesState.filters.tab || defaultFilters.tab,
            search: filters && filters.searchText || moviesState.filters.searchText || defaultFilters.searchText,
            sortBy: sortBy || moviesState.sortBy
        };

        const params: IParams = {};

        if (prelimParams.filter && prelimParams.filter !== genresNames.all) {
            params.filter = prelimParams.filter;
        }
        if (prelimParams.search) {
            params.search = prelimParams.search;
            params.searchBy = searchByOpts.title;
        }
        if (prelimParams.sortBy) {
            params.sortBy = prelimParams.sortBy;
            params.sortOrder = sortOrder.desc;
        }

        return NetworkController
            .request({method: methods.GET, url: "/movies", params})
            .then(response => dispatch(success({data: {movies: response.data.data}})))
            .catch(e => dispatch(failure(e)));
    }
};
