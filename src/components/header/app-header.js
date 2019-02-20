import React from 'react';
import './app-header.css';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const AppHeader = ({items}) => {
  const doneCount = items.filter((item) => item.done).length;
  const toDoCount = items.length - doneCount;
  return (
    <div style={{textAlign: 'center'}}>
      <Typography variant="h2" gutterBottom>Todo List</Typography>
      <Typography variant="h5" gutterBottom><span className="toDoCount">{toDoCount}</span> to do, <span className="doneCount">{doneCount}</span> done</Typography>
    </div>
  );
};

export default connect((state) => ({
  items: state.items
}))(withStyles()(AppHeader))
