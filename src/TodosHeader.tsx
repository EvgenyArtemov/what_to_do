import React, { ChangeEvent, useState, useRef, useEffect } from 'react';
import { AddTodo } from './redux/TodoActions';
import { useDispatch } from 'react-redux';
import './SCSS/TodosHeader.scss';

export const TodosHeader = () => {
    const dispatch = useDispatch();
    const count = useRef(0)

    let today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate().toString().padStart(2, '0')}`;
    const time = `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}`;
    const initialState = {
        text: '',
        date: date,
        time: time
    }

    const [formState, setFormState] = useState(initialState);
    const formHandler = (ev: ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setFormState({...formState, [target.name]: target.value});
    }

    const todoHandler = () => {
        if(formState.text){
            dispatch(AddTodo(formState.date.split('-').reverse().join('-'), 
                {
                    text: formState.text, 
                    time: formState.time, 
                    id: count.current, 
                    isDone: false
                }));
            count.current++
            setFormState({...formState, text: '', date, time})
        }
    }

    const handleEnter = (ev: KeyboardEvent) => {
        if(ev.key === 'Enter'){
            ev.preventDefault();
            todoHandler();
        }
    }

    useEffect(() => {
        today = new Date();
        document.addEventListener('keydown', handleEnter as EventListener, false);

        return () => {
            document.removeEventListener('keydown', handleEnter as EventListener, false);
        }
    })

    return (
        <section className="todos__header">
            <div className="todos__inputs">
                <form action="">
                    <input type="text" name="text" value={formState.text} onChange={formHandler} placeholder="Write a new task" className="input__text"/>
                    <input type="date" name="date" value={formState.date} onChange={formHandler} className="input__date"/>
                    <input type="time" name="time" value={formState.time} onChange={formHandler} className="input__time"/>
                    <button type="button" onClick={todoHandler} className="input__button">➕</button>
                </form>
            </div>           
        </section>
    )
}
