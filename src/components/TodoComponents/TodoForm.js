import React from 'react';
import styled from 'styled-components';

const AddButton = styled.button`
    background-color: orange;
    border-radius: 10px;
    margin: 10px;
    padding: 5px;
`

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: ''
        };
    }

    handleChanges = e => {
        this.setState({
            newItem: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewItem(this.state.newItem);
        this.setState({ newItem: '' })
    };

    render() {
        console.log('rendering form');
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                        name="newItem"
                        value={this.state.newItem}
                        onChange={this.handleChanges}
                />
                <AddButton>Add Todo</AddButton>
            </form>
        )
    }
}

export default TodoForm;