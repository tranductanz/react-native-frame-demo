import { handleCreateTodo, handleFetchTodos, handleRemoveTodo } from "@/src/containers/Home/model/homeThunk";
import { createSlice } from "@reduxjs/toolkit";


export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
    body?: string;
    userId?: number;
    createdAt?: string; // ISO date string
    updatedAt?: string; // ISO date string, optional for updates
}

export interface HomeState {
    todos: ITodo[];
    fetchTodos: {
        loading: boolean;
        error: string | null;
    };
    removeTodo: {
        loading: boolean;
        error: string | null;
    };
    createTodo: {
        loading: boolean;
        error: string | null;
    };
    updateTodo: {
        loading: boolean;
        error: string | null;
    };
}


export const initialState: HomeState = {
    todos: [],
    fetchTodos: {
        loading: false,
        error: null,
    },
    removeTodo: {
        loading: false,
        error: null,
    },
    createTodo: {
        loading: false,
        error: null,
    },
    updateTodo: {
        loading: false,
        error: null,
    },
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        // addTodo: (state, action: PayloadAction<string>) => { },
        // toggleCompleted: (state, action: PayloadAction<number>) => { },
        // removeTodo: (state, action: PayloadAction<number>) => { },
    },
    extraReducers: (builder) => {
        handleFetchTodos(builder);
        handleRemoveTodo(builder);
        handleCreateTodo(builder);
    },
}

)

export const { } = homeSlice.actions
export default homeSlice.reducer