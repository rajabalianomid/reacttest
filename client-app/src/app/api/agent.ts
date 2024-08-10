import axios, { AxiosResponse } from "axios";
import { Activity } from "../models/Activity";

axios.defaults.baseURL = 'https://localhost:7019/api';

const sleep = (delay: number) => {
    return new Promise((resolver) => {
        setTimeout(resolver, delay);
    })
}
axios.interceptors.response.use(async response => {
    try {
        await sleep(0);
        return response;
    } catch (error) {
        return await Promise.reject(error);
    }
})

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string, body: {}) => axios.delete<T>(url, body).then(responseBody),
}

const Activities = {
    list: () => requests.get<Activity[]>('/activities'),
    details: (id: string) => requests.get<Activity>(`/activities/${id}`),
    create: (activity: Activity) => axios.post<void>('/activities', activity),
    update: (activity: Activity) => axios.put<void>(`/activities/${activity.id}`, activity),
    delete: (id: string) => axios.delete<void>(`/activities/${id}`)
}

const agent = {
    Activities
}

export default agent;