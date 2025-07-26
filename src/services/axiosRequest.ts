// services/request.ts
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosClient from './axiosClient';

export type RequestOptions = {
    baseURL: string; // ✅ bắt buộc truyền
    url: string;
    method?: AxiosRequestConfig['method'];
    params?: AxiosRequestConfig['params'];
    data?: AxiosRequestConfig['data'];
    headers?: AxiosRequestConfig['headers'];
};

export const axiosRequest = async <T = any>({
    baseURL,
    url,
    method = 'GET',
    params,
    data,
    headers,
}: RequestOptions): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await axiosClient.request({
            baseURL,
            url,
            method,
            params,
            data,
            headers,
        });

        return response.data;
    } catch (error: any) {
        console.error(`[API ERROR] ${method} ${url}`, error?.response?.data || error);
        throw error?.response?.data || error;
    }
};
