import React, {useEffect, useState} from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { ToggleTodo } from './redux/TodoActions';
import { State } from './redux/store'
import { TodosHeader } from './TodosHeader';
import './SCSS/Todos.scss';

 export const Todos = () => {
     const dispatch = useDispatch();
     const todos = useSelector((state: State) => state, shallowEqual);

     const [check, setCheck] = useState(false);

     const changeHandler = (ev: any) => {
        dispatch(ToggleTodo(ev.target.dataset.key, +ev.target.dataset.id))
     }
     
     useEffect(() => {
         console.log(todos);
     }, [todos])
    return (
        <>
            <TodosHeader/>
            <section className="todo__container">
                {todos && Object.keys(todos).map(key => {
                    return (
                        <div className="todo__card">
                            <h3 className="todo__card__header">📆 {key}</h3>
                            <ul className="todo__list">
                                {todos[key].map((el) => {
                                    return (
                                        <li className="list__item">
                                            <input type="checkbox" checked={el.isDone} onChange={changeHandler} data-id={el.id} data-key={key} />  
                                            <span className={`list__item__text ${el.isDone ? 'crossed' : ''}`}>{el.text}</span>
                                            <span className="list__item__time">{el.time}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        )
                    })}
            </section>
        </>
    )
}
