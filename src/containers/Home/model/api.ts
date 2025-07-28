// api.ts
import { axiosRequest } from '@/src/services/axiosRequest';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ITodo } from './homeSlice';

// ✅ Fetch Todos
export const fetchTodos = createAsyncThunk<ITodo[]>(
    'home/fetchTodos',
    async () => {
        const response = await axiosRequest<ITodo[]>({
            method: 'GET',
            url: '/posts',
            baseURL: 'http://localhost:3001',
            params: {
                userId: 1,
            },
        });
        return response.data;
    }
);

// ✅ Remove Todo by ID
export const removeTodo = createAsyncThunk<number, number>(
    'home/removeTodo',
    async (id) => {

        await axiosRequest<void>({
            method: 'DELETE',
            url: `/posts/${id}`,
            baseURL: 'http://localhost:3001',
        });
        return id;
    }
);


export const createTodo = createAsyncThunk<ITodo, Omit<ITodo, 'id'>>(
    'home/createTodo',
    async (todo) => {
        console.log('create todo with ID:', todo);
        const response = await axiosRequest<ITodo>({
            method: 'POST',
            url: '/posts',
            baseURL: 'http://localhost:3001',
            data: todo,
        });
        return response.data;
    }
)