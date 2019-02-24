import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  header: {
    textAlign: 'center'
  },
});

const AppHeader = ({toDo, done, classes}) => {
  return (
    <div className={classes.header}>
      <Typography variant="h3" gutterBottom>Todo List</Typography>
      <Typography variant="h5" gutterBottom>{toDo} more to do, {done} done</Typography>
    </div>
  );
};

export default withStyles(styles)(AppHeader)
