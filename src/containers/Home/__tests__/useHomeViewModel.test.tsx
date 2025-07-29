import * as homeAPI from '@/src/containers/Home/model/api';
import { useHomeViewModel } from '@/src/containers/Home/viewmodal/useHomeViewModel';
import { useAppDispatch, useAppSelector } from '@/src/store/rootStore';
import { render, waitFor } from '@testing-library/react';
import React from 'react';

jest.mock('@/src/store/rootStore');
jest.mock('@/src/containers/Home/model/api');

// 🧪 Tạo TestComponent wrapper
const TestComponent = ({ onReady }: { onReady: (vm: ReturnType<typeof useHomeViewModel>) => void }) => {
    const vm = useHomeViewModel();
    React.useEffect(() => {
        onReady(vm);
    }, []);
    return null;
};

describe('useHomeViewModel', () => {
    const mockDispatch = jest.fn();
    const mockTodos = [{ id: 1, title: 'Learn Jest', completed: false }];
    const mockLoading = false;
    const mockError = null;

    beforeEach(() => {
        (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
        (useAppSelector as jest.Mock).mockImplementation((selectorFn) => {
            if (selectorFn.name === 'selectTodos') return mockTodos;
            if (selectorFn.name === 'selectLoading') return mockLoading;
            if (selectorFn.name === 'selectError') return mockError;
        });

        jest.clearAllMocks();
    });

    it('should expose todos, loading, error, isEmptyTodo', async () => {
        let vm: ReturnType<typeof useHomeViewModel>;
        render(<TestComponent onReady={(hook) => (vm = hook)} />);
        expect(vm!.todos).toEqual(mockTodos);
        expect(vm!.loading).toBe(mockLoading);
        expect(vm!.error).toBe(mockError);
        expect(vm!.isEmptyTodo).toBe(false);
    });

    it('should dispatch fetchTodos when loadTodos is called', async () => {
        const thunkAction = { type: 'FETCH_TODOS' };
        ((homeAPI.fetchTodos as unknown) as jest.Mock).mockReturnValue(thunkAction);

        let vm: ReturnType<typeof useHomeViewModel>;
        render(<TestComponent onReady={(hook) => (vm = hook)} />);
        await waitFor(() => vm!.loadTodos());

        expect(homeAPI.fetchTodos).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith(thunkAction);
    });

    it('should dispatch removeTodo when removeTodoItem is called', async () => {
        const thunkAction = { type: 'REMOVE_TODO' };
        ((homeAPI.removeTodo as unknown) as jest.Mock).mockReturnValue(thunkAction);

        let vm: ReturnType<typeof useHomeViewModel>;
        render(<TestComponent onReady={(hook) => (vm = hook)} />);
        await waitFor(() => vm!.removeTodoItem(1));

        expect(homeAPI.removeTodo).toHaveBeenCalledWith(1);
        expect(mockDispatch).toHaveBeenCalledWith(thunkAction);
    });

    it('should dispatch createTodo when createTodoItem is called', async () => {
        const thunkAction = { type: 'CREATE_TODO' };
        const newTodo = { title: 'New Task', completed: false };
        ((homeAPI.createTodo as unknown) as jest.Mock).mockReturnValue(thunkAction);

        let vm: ReturnType<typeof useHomeViewModel>;
        render(<TestComponent onReady={(hook) => (vm = hook)} />);
        await waitFor(() => vm!.createTodoItem(newTodo));

        expect(homeAPI.createTodo).toHaveBeenCalledWith(newTodo);
        expect(mockDispatch).toHaveBeenCalledWith(thunkAction);
    });
});
