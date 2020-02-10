import React from 'react'

const Todo = props => {
    return (
        <div onClick={() => props.toggleItem(props.item.id)} className={`item${props.item.added ? ' added' : ''}`}>
            <p>{props.item.name}</p>
        </div> 
    );
};

export default Todo;