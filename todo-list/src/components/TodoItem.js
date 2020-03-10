import React from 'react';
import './TodoItem.css';


function TodoItem({ item }) {

    let className = 'TodoItem';
    if(item.isComplete) {
        className += ' TodoItem-complete'
    }

    return (
        <div className={ className }>
            <p>{ item.title }</p>
        </div>
    );
}

export default TodoItem;