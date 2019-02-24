import React from 'react';
import './app-header.css';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <Typography>Todo List</Typography>
      <Typography>{toDo} more to do, {done} done</Typography>
    </div>
  );
};

export default withStyles()(AppHeader)
