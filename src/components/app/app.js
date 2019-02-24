import React, { Component } from 'react';
import AppHeader from '../header';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';


export default class App extends Component {

  state = {
    items: [
      { id: 1, label: 'jQuery', done: false },
      { id: 2, label: 'React', done:false },
      { id: 3, label: 'Angular', done: false }
    ],
  };

  onItemAdded = (label) => {
    this.setState((state) => {
      const item = this.createItem(label);
      return { items: [...state.items, item] };
    })
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const item = { ...arr[idx], [propName]: value } ;
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ];
  };

  onToggleDone = (id) => {
    this.setState((state) => {
      const items = this.toggleProperty(state.items, id, 'done');
      return { items };
    });
  };


  onDelete = (id) => {
    this.setState((state) => {
      const idx = state.items.findIndex((item) => item.id === id);
      const items = [
        ...state.items.slice(0, idx),
        ...state.items.slice(idx + 1)
      ];
      return { items };
    });
  };


  createItem(label) {
    return {
      id: (Date.now() + Math.random()).toString(),
      label,
      done: false
    };
  }

  render() {
    const { items } = this.state;
    const doneCount = items.filter((item) => item.done).length;
    const toDoCount = items.length - doneCount;
    const visibleItems = items;

    return (
      <div>
        <AppHeader toDo={toDoCount} done={doneCount}/>

        <TodoList
          items={ visibleItems }
          onToggleDone={this.onToggleDone}
          onDelete={this.onDelete} />

        <ItemAddForm
          onItemAdded={this.onItemAdded} />
      </div>
    );
  };
}