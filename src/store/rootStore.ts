import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import homeReducer from '../containers/Home/model/homeSlice'

export const store = configureStore({
    reducer: {
        home: homeReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Dùng trong component thay vì `useDispatch()` để có type chính xác
export const useAppDispatch: () => AppDispatch = useDispatch

// Dùng thay thế `useSelector()` để có autocomplete
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector