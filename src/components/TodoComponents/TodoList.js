import React from 'react';
import Todo from "./Todo";
import styled from 'styled-components';

const ClearButton = styled.button`
    background-color: blue;
    color: white;
    border-radius: 35px;
    padding: 20px;
    margin-top: 50px;
`

const TodoList = props => {

    return (
        <div className="todo-list">
            {props.items.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
            ))}
            <ClearButton className="clear-btn" onClick={props.onClick}>
                Clear Completed
            </ClearButton>
        </div>
    );
};

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
export default TodoList;