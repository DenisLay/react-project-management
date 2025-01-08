import { requestService, RequestParams } from './requestService.ts';
import { ResponseStatus } from './requestService.ts';

interface AuthParams {
    email: string;
    password: string;
}

const login = async (params: AuthParams) => {
    const data = requestService.post({
            url: '/public/signin',
            body: params
        })
        .then(response => {
            return {
                status: ResponseStatus.SUCCESS,
                result: response
            }
        })
        .catch(error => {
            return {
                status: ResponseStatus.ERROR,
                result: error
            }
        });

    return data;
}

const register = async (params: AuthParams) => {
    const data = requestService.post({
            url: '/public/register',
            body: params
        })
        .then(response => {
            return {
                status: ResponseStatus.SUCCESS,
                result: response
            }
        })
        .catch(error => {
            return {
                status: ResponseStatus.ERROR,
                result: error
            }
        });

    return data;
}

export { login, register };