// homeThunk.ts
import { createTodo, fetchTodos, removeTodo } from "@/src/containers/Home/model/api";
import { HomeState, ITodo } from "@/src/containers/Home/model/homeSlice";
import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";

// ✅ Handle fetchTodos cases
export const handleFetchTodos = (builder: ActionReducerMapBuilder<HomeState>) => {
    builder
        .addCase(fetchTodos.pending, (state) => {
            state.fetchTodos.loading = true;
            state.fetchTodos.error = null; // reset error trước đó
        })
        .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<ITodo[]>) => {
            state.fetchTodos.loading = false;
            state.todos = action.payload;
        })
        .addCase(fetchTodos.rejected, (state, action) => {
            state.fetchTodos.loading = false;
            state.fetchTodos.error = action.error.message || "Failed to fetch todos";
        });
};

// ✅ Handle removeTodo cases
export const handleRemoveTodo = (builder: ActionReducerMapBuilder<HomeState>) => {
    builder
        .addCase(removeTodo.pending, (state) => {
            state.removeTodo.loading = true;
            state.removeTodo.error = null; // reset error trước đó
        })
        .addCase(removeTodo.fulfilled, (state, action: PayloadAction<number>) => {
            state.removeTodo.loading = false;
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        })
        .addCase(removeTodo.rejected, (state, action) => {
            state.removeTodo.loading = false;
            state.removeTodo.error = action.error.message || "Failed to remove todo";
        });
};


export const handleCreateTodo = (builder: ActionReducerMapBuilder<HomeState>) => {
    builder
        .addCase(createTodo.pending, (state) => {
            state.createTodo.loading = true;
            state.createTodo.error = null; // reset error trước đó
        })
        .addCase(createTodo.fulfilled, (state, action: PayloadAction<ITodo>) => {
            state.createTodo.loading = false;
            state.todos.push(action.payload);
        })
        .addCase(createTodo.rejected, (state, action) => {
            state.createTodo.loading = false;
            state.createTodo.error = action.error.message || "Failed to create todo";
        });
}