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
    editing: false,
    changeText: this.props.label
  };

  handleEditing = (e) => {
    this.setState({
      editing: !this.state.editing,
    })
  }

  handleEditingDoneKeydown = (e) => {
    if(e.keyCode === 13) {
      this.setState({
        editing: !this.state.editing
      })
    }
  }

  handleEditingDoneClick = (e) => {

      this.setState({
        editing: !this.state.editing
      })
    
  }

  handleEditingChange = (e) => {
    let changeTextValue = e.target.value
    this.setState({
      changeText: changeTextValue
    })
  }

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

    const { edit, done,
      label, onToggleImportant, onToggleDone, onDelete, onClick, id} = this.props;
      
    const viewStyle = {};
    const editStyle = {};
    this.state.editing ? viewStyle.display = 'none' : editStyle.display = 'none'  

    let classNames = 'todo-list-item';

    if (done) {
      classNames += ' done';
    }
    return (
      <div>
      <div style={viewStyle} >
      <div onClick={this.handleToggle(id)}>
      <ListItem key={id} role={undefined} dense button onClick={onToggleDone}>{this.state.changeText}
        <div className={classNames}>
          <ListItemText 
      
            style={{
              textDecoration: done ? 'line-through' : 'none'
            }}
            />
        </div>
        <Checkbox
          checked={this.state.checked.indexOf(id) !== -1}
          tabIndex={-1}
          disableRipple
        />
        </ListItem>
        <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDelete}>
                delete
        </button>
        <button
          onClick={this.handleEditing}
        >
        edit
        </button>
        


      </div>
      
      </div>
      <div style={editStyle}>
    
        <input 
          value={this.state.changeText}
          onKeyDown={this.handleEditingDoneKeydown}
          onChange={this.handleEditingChange}
          
        />
        <button
          onClick={this.handleEditingDoneClick}
        >
          edit
        </button>

      </div>

      
      </div>
    );
  }
};

export default withStyles(styles)(TodoListItem);
