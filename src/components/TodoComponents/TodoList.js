import React from 'react';
import Todo from "./Todo";

const TodoList = props => {

    return (
        <div className="todo-list">
            {props.items.map(item => (
                <Todo key={item.id} item={item} />
            ))}
            <button className="clear-btn" onClick={props.clearAdded}>
                Clear
            </button>
        </div>
    );
};

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
export default TodoList;