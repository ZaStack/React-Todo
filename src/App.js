import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


// const listItems = [
//   {
//     id: 1,
//     name: 'Finish making Todo list',
//     completed: false
//   }
// ];

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
      <React.Fragment >
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addNewItem={this.addNewItem}/>
        </div>
        <TodoList items={this.state.TodoList} 
                  toggleItem={this.toggleItem}
                  onClick={this.clearCompleted}
        />
      </React.Fragment>
    );
  }
}

export default App;
