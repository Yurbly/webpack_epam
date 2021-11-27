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

interface IRequestProps {
    method: methods,
    url: string
}

const request = async (options: IRequestProps) => {
    return  await axiosInstance.request(options)
}

export default {
    request
}
