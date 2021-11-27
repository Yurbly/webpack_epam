import {failure, request, success} from "store/movies/actions";
import NetworkController, {methods} from "controllers/NetworkController";
import {Dispatch} from "redux";

export const getMoviesRequest = () => {
    return (dispatch: Dispatch) => {

        dispatch(request());

        return NetworkController
            .request({method: methods.GET, url: "/movies"})
            .then(response => dispatch(success(response.data.data)))
            .catch(e => dispatch(failure(e)));
    }
};
