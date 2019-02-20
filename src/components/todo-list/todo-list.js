import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import { connect } from "react-redux";
import { addItem } from "../../AC";
import { toggleTodo } from "../../AC";

import './todo-list.css';

const TodoList = ({ items, toggleTodo }) => {

  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          { ...itemProps }
          onClick={() => toggleTodo(item.id)}
          />
      </li>
    );
  });

  return (<ul className="todo-list list-group">{ elements }</ul>);
};

const getVisibleTodos = items => {
  return items;
};

const mapStateToProps = state => ({
  items: getVisibleTodos(state.items)
}); 

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
