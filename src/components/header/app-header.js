import React from 'react';
import './app-header.css';
import { connect } from 'react-redux'

const AppHeader = ({items}) => {
  const doneCount = items.filter((item) => item.done).length;
  const toDoCount = items.length - doneCount;
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{toDoCount} to do, {doneCount} done</h2>
    </div>
  );
};

export default connect((state) => ({
  items: state.items
}))(AppHeader)  
