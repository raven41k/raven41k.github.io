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
import { connect } from "react-redux";
import { addItem } from "../../AC";
import { toggleTodo } from "../../AC";

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

  state = {
    checked: [0],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {

    const { classes, items, toggleTodo} = this.props;

    const elements = items.map((item, idx) => {
      const { id, ...itemProps } = item;
      return (
      <TodoListItem
        key={item.id}
        { ...itemProps }
        onClick={() => toggleTodo(item.id)}
        id={item.id}
        />
      );
    });

    return (

    <List className={classes.root}>
      { elements }
    </List>

  );
  }

  
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
)(withStyles(styles)(TodoList));
