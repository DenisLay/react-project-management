import axios from 'axios';

interface RequestParams {
    url: string;
    body: object;
}

enum ResponseStatus {
    SUCCESS,
    ERROR
}

class RequestService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    post(params: RequestParams) {
        return axios.post(`${this.baseUrl}${params.url}`, { ...params.body });
        /*.then(response => {
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
        })*/
    }
}

const requestService = new RequestService('https://flaskapitutorial.onrender.com');

export { requestService, RequestParams, ResponseStatus };