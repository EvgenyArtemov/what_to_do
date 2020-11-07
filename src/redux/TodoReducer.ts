//@ts-nocheck
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, TodoState, TodoActions,TodoEntry } from './TodoTypes';

const initialState: TodoState = {
            '12-10-2020': [
                {
                    text: 'Запишите ваши задачи',
                    id: 1,
                    time: '11:03',
                    isDone: false
                }
            ],
            '13-10-2020': [
                {
                    text: 'Запишите ваши задачи',
                    id: 1,
                    time: '11:03',
                    isDone: false
                },
                {
                    text: 'И они отобразятся здесь',
                    id: 2,
                    time: '16:05',
                    isDone: false
                },
                {
                    text: 'Потом выполните их',
                    id: 3,
                    time: '12:07',
                    isDone: false
                }
            ],
            '14-10-2020': [
                {
                    text: 'Запишите ваши задачи',
                    id: 1,
                    time: '11:03',
                    isDone: false
                },
                {
                    text: 'И они отобразятся здесь',
                    id: 2,
                    time: '16:05',
                    isDone: false
                },
                {
                    text: 'Потом выполните их',
                    id: 3,
                    time: '12:07',
                    isDone: false
                },
                {
                    text: 'Строки не зависят от высоты контейнера',
                    id: 4,
                    time: '12:07',
                    isDone: false
                },
                {
                    text: 'Убедитесь сами!',
                    id: 5,
                    time: '12:07',
                    isDone: false
                }
            ],
            '15-10-2020': [
                {
                    text: 'Запишите ваши задачи',
                    id: 1,
                    time: '11:03',
                    isDone: false
                },
                {
                    text: 'И они отобразятся здесь',
                    id: 2,
                    time: '16:05',
                    isDone: false
                },
                {
                    text: 'Потом выполните их',
                    id: 3,
                    time: '12:07',
                    isDone: false
                }
            ],
            '16-10-2020': [
                {
                    text: 'Запишите ваши задачи',
                    id: 1,
                    time: '11:03',
                    isDone: false
                },
                {
                    text: 'И они отобразятся здесь',
                    id: 2,
                    time: '16:05',
                    isDone: false
                },
                {
                    text: 'Потом выполните их',
                    id: 3,
                    time: '12:07',
                    isDone: false
                }
            ]
}


export const TodoReducer = (state = initialState, action: TodoActions): TodoState => {
    switch (action.type) {
        case ADD_TODO:
            if(state[action.date]){
                return {
                    ...state,
                    [action.date]: [...state[action.date], action.payload]
                }
            }
            return {
                ...state,
                [action.date]: [action.payload]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                [action.date]: state[action.date].map(el => {
                    if(el.id === action.id){
                        el.isDone = !el.isDone
                        return el;
                    }
                    return el;
                }).sort((a,b) => {return a.isDone-b.isDone})
            }
        default:
            return state;
    }
}