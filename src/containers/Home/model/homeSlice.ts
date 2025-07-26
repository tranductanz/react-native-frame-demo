import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTodos } from "./fetchTodo";


export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

const initialState = {
    todos: [] as ITodo[],
    loading: false,
    error: null as string | null
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => { },
        toggleCompleted: (state, action: PayloadAction<number>) => { },
        removeTodo: (state, action: PayloadAction<number>) => { },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<ITodo[]>) => {
                state.todos = action.payload;
                state.loading = false;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch todos';
            });
    },
}

)

export const { addTodo, toggleCompleted, removeTodo } = homeSlice.actions
export default homeSlice.reducer