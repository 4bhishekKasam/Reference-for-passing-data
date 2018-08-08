import React, { Component } from 'react';
import { render } from 'react-dom';

class Child extends Component {
  constructor() {
    super()
    this.state = { inputField: "" };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  style = {
    border: "1px solid black",
    margin: 20,
  }
  submitHandler(e) {
    e.preventDefault();
    this.props.handleToParent(this.state.inputField);
    this.setState({
      inputField: ''
    });
  }
  handleChange(event) {
    this.setState({
      inputField: event.target.value
    });
  }

  render() {
    return (
      <div style={this.style}>
        <form onSubmit={this.submitHandler}>
          <input type="text" id="theInput"
            value={this.state.inputField}
            onChange={this.handleChange} />
          <br /><br />
          <input type="submit" value="Submit" />
        </form>
        <p>I am child : {this.state.inputField}</p>
      </div>
    )
  }
}

export default Child;
