import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComment } from '../../AC'

import './item-add-form.css';

class ItemAddForm extends Component {

  state = {
    label: ''
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
    this.props.addComment(this.state.label)
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}>

        <input type="text"
               value={this.state.label}
               onChange={this.onLabelChange}
               placeholder="What needs to be done?" />

        <button type="submit"
                >Add</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comment: state.comment
  };
};


export default connect(
  mapStateToProps,
  (dispatch) => ({
    addComment: (label) => dispatch(addComment(label))
  })
)(ItemAddForm)