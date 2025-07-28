
import { ITodo } from '@/src/containers/Home/model/homeSlice';
import { useAppDispatch, useAppSelector } from '@/src/store/rootStore';
import * as homeAPI from '../model/api';
import { selectError, selectLoading, selectTodos } from '../model/homeSelector';

export const useHomeViewModel = () => {
    const dispatch = useAppDispatch()

    const todos = useAppSelector(selectTodos)
    const loading = useAppSelector(selectLoading)
    const error = useAppSelector(selectError)
    const isEmptyTodo = todos.length === 0

    const loadTodos = () => {
        dispatch(homeAPI.fetchTodos())
    }

    const removeTodoItem = (id: number) => {
        dispatch(homeAPI.removeTodo(id))
    }

    const createTodoItem = (todo: Omit<ITodo, 'id'>) => {
        dispatch(homeAPI.createTodo(todo))
    }

    return {
        todos,
        loading,
        error,
        loadTodos,
        isEmptyTodo,
        removeTodoItem,
        createTodoItem
    }
}


