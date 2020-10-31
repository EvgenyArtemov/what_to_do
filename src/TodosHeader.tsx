import React from 'react';
import './SCSS/TodosHeader.scss';

export const TodosHeader = () => {
    return (
        <section className="todos__header">
            <div className="todos__inputs">
                <form action="">
                    <input type="text" placeholder="Write a new task" className="input__text"/>
                    <input type="date" className="input__date"/>
                    <input type="time" placeholder="hey" className="input__time"/>
                    <button type="button" className="input__button">➕</button>
                </form>
            </div>           
        </section>
    )
}
