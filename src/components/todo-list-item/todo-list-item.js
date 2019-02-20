import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ done,
      label, onClick }) => {

  let classNames = 'todo-list-item';

  if (done) {
    classNames += ' done';
  }


  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={onClick}
        style={{
          textDecoration: done ? 'line-through' : 'none'
        }}
        >{label}
        
        </span>

      {/* <button type="button"
              className=""
              onClick={onDelete}>
        <i className="fa fa-trash-o"></i>
      </button> */}
    </span>
  );
};

export default TodoListItem;
