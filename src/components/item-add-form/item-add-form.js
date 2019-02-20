
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addItem } from '../../AC'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';


import './item-add-form.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop:"35px",
    marginBottom:"35px",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    fontSize: '18px'
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const ItemAddForm = ({ dispatch, classes }) => {
  let input

  return (
    <div>
      <form className={classes.container} onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addItem(input.value))
        input.value = ''
      }}>
        <TextField
         required 
         label="Name"
         className={classes.textField}
         inputProps={{
          ref: (node) => { input = node },
        }}
          />
        <Fab type="submit" color="primary" size="medium" className={classes.button}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  )
}



export default connect()(withStyles(styles)(ItemAddForm));