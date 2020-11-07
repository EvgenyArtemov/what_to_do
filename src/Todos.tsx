import React, {useEffect, useState} from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { ToggleTodo } from './redux/TodoActions';
import { State } from './redux/store'
import { TodosHeader } from './TodosHeader';
import './SCSS/Todos.scss';

 export const Todos = () => {
     const dispatch = useDispatch();
     const todos = useSelector((state: State) => state, shallowEqual);

     const changeHandler = (ev: any) => {
        dispatch(ToggleTodo(ev.target.dataset.key, +ev.target.dataset.id))
     }

     let formatter = new Intl.DateTimeFormat("ru", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });

    return (
        <>
            <TodosHeader/>
            <section className="todo__container">
                {todos && Object.keys(todos).map((key, i) => {
                    const keyDate = key.split('-').reverse();
                    console.log(keyDate)
                    const date = new Date(parseInt(keyDate[0]), parseInt(keyDate[1]) - 1, parseInt(keyDate[2]));
                    const fullDate = formatter.format(date)
                    return (
                        <div className="todo__card" id={i.toString()}>
                            <h3 className="todo__card__header">📆 {fullDate}</h3>
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
