import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, TodoActions, TodoEntry } from './TodoTypes';

export const AddTodo = (date: string, todo: TodoEntry): TodoActions => ({
    type: ADD_TODO,
    date: date,
    payload: todo
});

export const RemoveTodo = (date: string, id: number): TodoActions => ({
    type: REMOVE_TODO,
    date,
    id
});

export const ToggleTodo = (date: string, id: number): TodoActions => ({
    type: TOGGLE_TODO,
    date,
    id
});