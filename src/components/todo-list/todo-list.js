import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin:'auto',
    display:'block'
  },
});

class TodoList extends React.Component {  


  render() {

    const { items, onToggleImportant, onToggleDone, onDelete, classes } = this.props;

    const elements = items.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id} className="list-group-item">
          <TodoListItem
            { ...itemProps }
            onToggleImportant={ () => onToggleImportant(id) }
            onToggleDone={ () => onToggleDone(id) }
            onDelete={ () => onDelete(id) } 
            id={id} />
        </li>
      );
  });

    return (

    <List className={classes.root}>
      { elements }
    </List>

  );
  }

  
};


export default withStyles(styles)(TodoList);
