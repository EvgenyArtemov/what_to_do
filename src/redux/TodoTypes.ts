export interface TodoEntry {
    text: string;
    id: number;
    isDone: boolean;
}

interface Dates {
    [key: string]: TodoEntry[] | any;
}

export interface TodoState {
    dates: Dates;
}

export const ADD_TODO  = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

interface AddTodo {
    type: typeof ADD_TODO;
    date: string;
    payload: TodoEntry;
}

interface RemoveTodo {
    type: typeof REMOVE_TODO;
    date: string;
    id: number;
}

interface ToggleTodo {
    type: typeof TOGGLE_TODO;
    date: string;
    id: number;
}

export type TodoActions = AddTodo | RemoveTodo | ToggleTodo;