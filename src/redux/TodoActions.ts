import { ADD_TODO, TOGGLE_TODO, TodoActions, TodoEntry } from './TodoTypes';

export const AddTodo = (date: string, todo: TodoEntry): TodoActions => ({
    type: ADD_TODO,
    date,
    time: todo.time,
    payload: todo
});


export const ToggleTodo = (date: string, id: number): TodoActions => ({
    type: TOGGLE_TODO,
    date,
    id
});