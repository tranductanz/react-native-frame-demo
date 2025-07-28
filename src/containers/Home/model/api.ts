import { axiosRequest } from '@/src/services/axiosRequest';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ITodo } from './homeSlice';



export const fetchTodos = createAsyncThunk<ITodo[]>(
    'home/fetchTodos',
    async () => {
        const response = await axiosRequest<ITodo[]>({
            method: 'GET',
            url: '/posts',
            baseURL: 'http://localhost:3001',
            params: {
                userId: 1
            }
        });
        return response.data;
    }
);
