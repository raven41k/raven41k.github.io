import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addItem } from '../../AC'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';


import './item-add-form.css';

const ItemAddForm = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addItem(input.value))
        input.value = ''
      }}>
        <input required ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}



export default withStyles(styles)(ItemAddForm);