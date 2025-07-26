
import { useAppDispatch, useAppSelector } from '@/src/store/rootStore'
import { fetchTodos } from '../model/fetchTodo'
import { selectError, selectLoading, selectTodos } from '../model/homeSelector'

export const useHomeViewModel = () => {
    const dispatch = useAppDispatch()

    const todos = useAppSelector(selectTodos)
    const loading = useAppSelector(selectLoading)
    const error = useAppSelector(selectError)

    const loadTodos = () => {
        dispatch(fetchTodos())
    }

    return {
        todos,
        loading,
        error,
        loadTodos
    }
}
