import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import styled from 'styled-components'
import './App.css'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 1000px;
  width: 1000px;
  height: 100vh;
  border: 1px solid green;
  
`
const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  max-width: 100%;
  width: 100%;
  margin: 20px;
  padding: 20px;
`

const BotBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: orange;
  width: 100%;
  align-items: center;
  margin: 20px;
  padding: 20px;

`

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      TodoList: []
    };
  }

  toggleItem = clickedId => {
    const newTodoList = this.state.TodoList.map(item => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });

    this.setState ({
      TodoList: newTodoList
    });
  };

  addNewItem = itemText => {
    const newItem = {
      name: itemText,
      id: Date.now()
    };
    this.setState({
      TodoList: [...this.state.TodoList, newItem]
    })
  }

  clearCompleted = () => {
    const newTodoList = this.state.TodoList.filter(item => !item.completed)
    this.setState({
      TodoList: newTodoList
    })
  }

  render() {
    console.log('rendering...');
    return (
      <Container >
        <TopBox>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addNewItem={this.addNewItem}/>
        </TopBox>
        <BotBox >
          <TodoList items={this.state.TodoList} 
                    toggleItem={this.toggleItem}
                    onClick={this.clearCompleted}
          />
        </BotBox>
      </Container>
    );
  }
}

export default App;
