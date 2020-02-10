import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const listItems = [
  {
    name: 'Finish making Todo list',
    id: 1
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      TodoList: listItems 
    };
  }

  toggleItem = clickedID => {
    const newTodoList = this.state.TodoList.map(item => {
      return item;
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
        />
      </React.Fragment>
    );
  }
}

export default App;
