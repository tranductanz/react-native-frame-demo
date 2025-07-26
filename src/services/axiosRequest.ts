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
}: RequestOptions): Promise<AxiosResponse<T>> => { // ✅ TRẢ VỀ toàn bộ response
    try {
        const response: AxiosResponse<T> = await axiosClient.request({
            baseURL,
            url,
            method,
            params,
            data,
            headers,
        });

        return response;
    } catch (error: any) {
        console.error(`[API ERROR] ${method} ${url}`, error?.response?.data || error);
        const message =
            error?.response?.data?.message ||
            error?.message ||
            'Unknown error occurred';
        throw new Error(message); // ✅ Luôn throw Error chuẩn
    }
};
