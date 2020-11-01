export interface TodoEntry {
    text: string;
    id: number;
    time: string;
    isDone: boolean;
}

export interface TodoState {
    [key: string]: TodoEntry[];
}

export const ADD_TODO  = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

interface AddTodo {
    type: typeof ADD_TODO;
    date: string;
    time: string;
    payload: TodoEntry;
}


interface ToggleTodo {
    type: typeof TOGGLE_TODO;
    date: string;
    id: number;
}

export type TodoActions = AddTodo | ToggleTodo;