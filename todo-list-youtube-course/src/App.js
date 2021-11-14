import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import { TodoRows } from './components/TodoRows';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Zander",
      todoItems: [
        { action: "Buy Milk", done: false },
        { action: "Dentist at 5pm", done: false },
        { action: "Go to Gym", done: false },
      ],
      newTodo: '',
    };
  };

  toggleDone = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      )
    })
  };

  todoRows = () => this.state.todoItems.map((item) => (
    <TodoRows key={item.action} item={item} toggleDone={this.toggleDone} deleteTask={this.deleteTask} />));

  deleteTask = (todo) => {
    let newTodos = this.state.todoItems.filter((item) => item.action !== todo.action);
    this.setState({ todoItems: newTodos });
  }

  updateValue = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  checkIfTodoExists = (todo) => {
    for (const item of this.state.todoItems) {
      if (item.action === todo) {
        throw new Error('This todo already exist');
      };
    };
  };

  newTodo = () => {
    this.checkIfTodoExists(this.state.newTodo);
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, done: false }
      ]
    });
  };

  render = () => (
    <div className="container">
      <div className="row">
        <Navbar name={this.state.userName} />
        <div className="col-12">
          <input value={this.state.newToDo}
            className="form-control"
            onChange={this.updateValue}
          />
          <button className="btn btn-primary" onClick={this.newTodo}>Add</button>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Complete</th>
                <th>Delete task</th>
              </tr>
            </thead>
            <tbody>{this.todoRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );

};