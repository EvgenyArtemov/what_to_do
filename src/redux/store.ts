import { createStore } from 'redux';
import { TodoReducer } from './TodoReducer';

export const store = createStore(TodoReducer);

export type State = ReturnType<typeof TodoReducer>;