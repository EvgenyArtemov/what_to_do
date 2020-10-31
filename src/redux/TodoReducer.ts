import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, TodoState, TodoActions,TodoEntry } from './TodoTypes';

const initialState: TodoState = {
    dates: {
            '12.10.2020': [
                {
                    text: 'Сделать одно',
                    id: 1,
                    isDone: false
                },
                {
                    text: 'Сделать другое',
                    id: 2,
                    isDone: false
                },
                {
                    text: 'Сделать третье',
                    id: 3,
                    isDone: false
                }
            ],
            '13.10.2020': [
                {
                    text: 'Сделать одно',
                    id: 1,
                    isDone: false
                },
                {
                    text: 'Сделать другое',
                    id: 2,
                    isDone: false
                },
                {
                    text: 'Сделать третье',
                    id: 3,
                    isDone: false
                }
            ] 
        }
}


export const TodoReducer = (state = initialState, action: TodoActions): TodoState => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                dates: {
                    [action.date]: [action.payload, ...state.dates[action.date]]
                }
            }
        case REMOVE_TODO:
            return {
                ...state,
                dates: {
                    [action.date]: state.dates[action.date].filter((item: TodoEntry) => { return item.id !== action.id})
                }
            }
        case TOGGLE_TODO:
            return {
                ...state,
                dates: {
                    [action.date]:  state.dates[action.date].map((item: TodoEntry) => {
                        if(item.id === action.id){
                            item.isDone = !item.isDone
                            return item
                        }
                        return item
                    })
                }
            }
        default:
            return state;
    }
}