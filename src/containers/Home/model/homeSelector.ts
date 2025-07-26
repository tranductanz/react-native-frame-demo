import { RootState } from "@/src/store/rootStore"



export const selectTodos = (state: RootState) => state.home.todos
export const selectLoading = (state: RootState) => state.home.loading
export const selectError = (state: RootState) => state.home.error
