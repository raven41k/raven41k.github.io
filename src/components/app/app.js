import React, { Component } from 'react';
import { connect } from 'react-redux'

import AppHeader from '../header';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';


export class App extends Component {

  maxId = 100;

  state = {
    items: this.props.items,
  };

  render() {

    const doneCount = this.state.items.filter((item) => item.done).length;
    const toDoCount = this.state.items.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount}/>

        <div className="search-panel d-flex">
          <ItemStatusFilter />
        </div>

        <TodoList />

        <ItemAddForm />
      </div>
    );
  };
}

export default connect((state) => ({
  items: state.items
}))(App)  