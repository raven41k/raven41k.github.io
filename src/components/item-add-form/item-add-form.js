import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addItem } from '../../AC'

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




export default connect()(ItemAddForm)