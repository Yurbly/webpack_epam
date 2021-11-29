import axios, {AxiosInstance} from 'axios';
import { RESR_API_URL } from './env';

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: RESR_API_URL
});

export enum methods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

export enum searchByOpts {
    title = "title",
    genre = "genre"
}

export interface IParams {
    filter?: string,
    search?: string,
    searchBy?: string,
    sortBy?: string,
    sortOrder?: string
}

interface IRequestProps {
    method: methods,
    url: string,
    params?: IParams
}

const request = async (options: IRequestProps) => {
    return  await axiosInstance.request(options)
}

export default {
    request
}
