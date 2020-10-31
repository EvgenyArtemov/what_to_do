import React, {useEffect} from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { AddTodo } from './redux/TodoActions';
import { State } from './redux/store'
import { TodosHeader } from './TodosHeader';

 export const Todos = () => {
     const dispatch = useDispatch();
     const todos = useSelector((state: State) => state.dates, shallowEqual);

     console.log(todos)

    return (
        <>
            <TodosHeader/>
        </>
    )
}
