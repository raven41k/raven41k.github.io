import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';


import './todo-list-item.css';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class TodoListItem extends React.Component {

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

    const { done, label, onClick, id} = this.props;

    let classNames = 'todo-list-item';

    if (done) {
      classNames += ' done';
    }
    return (
      <div onClick={onClick}>
      <ListItem key={id} role={undefined} dense button onClick={this.handleToggle(id)}>
        <Checkbox
          checked={this.state.checked.indexOf(id) !== -1}
          tabIndex={-1}
          disableRipple
        />
        <div className={classNames}>
          <ListItemText 
            primary={label}
            style={{
              textDecoration: done ? 'line-through' : 'none'
            }}
            >
          </ListItemText >
        </div>
        </ListItem>
      </div>
    );
  }
};

export default withStyles(styles)(TodoListItem);
