
import React, { Component } from 'react';
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

class ItemAddForm extends Component {

  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };
  

  onSubmit = (e) => {
    e.preventDefault();
    const { label } = this.state;
    this.setState({ label: '' });
    if (!label) {
      return false;
    }
    const cb = this.props.onItemAdded || (() => {});
    cb(label);
  };

  render() {
    const {classes} = this.props
    return (
      <div>
        <form 
          className="bottom-panel d-flex"
          onSubmit={this.onSubmit}>
          <TextField
            className="form-control new-todo-label"
            value={this.state.label}
            onChange={this.onLabelChange}
            placeholder="What needs to be done?"
            />
          <Fab type="submit" color="primary" size="medium" className={classes.button}>
            <AddIcon />
          </Fab>
        </form>
      </div>
    )
  }
  
}



export default withStyles(styles)(ItemAddForm);