import { ITodo } from '@/src/containers/Home/model/homeSlice';
import { create } from 'zustand';
// import { fetchTodosApi, removeTodoApi } from './homeApi';
import * as homeAPI from '../model/api';

type HomeStore = {
    todos: ITodo[];
    loading: boolean;
    error: string | null;
    fetchTodos: () => Promise<void>;
    removeTodo: (id: number) => Promise<void>;
};

export const useHomeStore = create<HomeStore>((set) => ({
    todos: [],
    loading: false,
    error: null,

    fetchTodos: async () => {
        set({ loading: true });
        try {
            const todos = await homeAPI.fetchTodos();
            //@ts-ignore
            set({ todos, loading: false });
        } catch (e: any) {
            set({ error: e.message, loading: false });
        }
    },

    removeTodo: async (id: number) => {
        try {
            await homeAPI.removeTodo(id);
            set((state) => ({
                todos: state.todos.filter((t) => t.id !== id),
            }));
        } catch (e: any) {
            set({ error: e.message });
        }
    },
}));
