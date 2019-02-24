import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 460,
    backgroundColor: theme.palette.background.paper,
    display: 'flex'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    fontSize: '18px'
  },
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  text: {
    maxWidth: '80%',
    wordBreak: 'break-all'
  }
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

    const { classes, done, onToggleDone, onDelete, id} = this.props;
      
    const viewStyle = {};
    const editStyle = {};
    this.state.editing ? viewStyle.display = 'none' : editStyle.display = 'none'  

    return (
      <div>
        <div style={viewStyle} className={classes.root}>
          <div style={{width: '60%'}} onClick={this.handleToggle(id)}>
            <ListItem key={id} role={undefined} dense button onClick={onToggleDone}>
              <Checkbox
                checked={this.state.checked.indexOf(id) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <Typography variant="h3" gutterBottom className={classes.text}>
                {this.state.changeText}
              </Typography>
            </ListItem>
          </div>
          <div style={{width: '40%', textAlign: 'right'}}>
            <Fab 
              className={classes.fab} 
              size="small"
              onClick={onDelete}>
              <DeleteIcon />
            </Fab>
            <Fab
              color="secondary" 
              aria-label="Edit" 
              className={classes.fab} 
              onClick={this.handleEditing}
              size="small"
            >
              <Icon>edit_icon</Icon>
            </Fab>
          </div>
        
        </div>
        <div style={editStyle}>
      
          <TextField 
            value={this.state.changeText}
            onKeyDown={this.handleEditingDoneKeydown}
            onChange={this.handleEditingChange}
            className={classes.textField}
      
          />
          <Button 
            color="secondary" 
            className={classes.button}        
            onClick={this.handleEditingDoneClick}
          >
            rename
          </Button>

        </div>

      
      </div>
    );
  }
};

export default withStyles(styles)(TodoListItem);
