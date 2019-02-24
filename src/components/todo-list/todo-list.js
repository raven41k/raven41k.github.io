import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import TodoListItem from '../todo-list-item/todo-list-item';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin:'auto',
    display:'block'
  },
  list: {
    marginBottom: '25px'
  }
});

class TodoList extends React.Component {  

  render() {

    const { items, onToggleImportant, onToggleDone, onDelete, classes } = this.props;

    const elements = items.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id} className={classes.list}>

          <TodoListItem
            { ...itemProps }
            onToggleImportant={ () => onToggleImportant(id) }
            onToggleDone={ () => onToggleDone(id) }
            onDelete={ () => onDelete(id) } 
            label={item.label}
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
