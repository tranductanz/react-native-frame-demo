import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { ITodo } from './homeSlice';



export const fetchTodos = createAsyncThunk<ITodo[]>(
    'home/fetchTodos',
    async () => {
        const response = await axios.get<ITodo[]>('http://localhost:3001/posts');
        console.log(response, 'Fetched Todos');
        return response.data;
    }
);
