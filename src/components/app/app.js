import React, { Component } from 'react';
import { connect } from 'react-redux'

import AppHeader from '../header';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';


export class App extends Component {

  state = {
    items: this.props.items,
  };

  render() {

    return (
      <div className="todo-app">
        <AppHeader/>
        <TodoList />
        <ItemAddForm />
      </div>
    );
  };
}

export default connect((state) => ({
  items: state.items
}))(App)  