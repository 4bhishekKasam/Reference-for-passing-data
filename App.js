import React, { Component } from 'react';
import { render } from 'react-dom';
import Child from './Child';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      childValue:'',
    };
    this.handleFromChild=this.handleFromChild.bind(this);
  }
 style = {
    border: "1px solid blue",
    margin: 20,
  }
  handleFromChild(value){
    this.setState({childValue: value});
  }

  render() {
    return (
      <div style={this.style}>
        <Child handleToParent={this.handleFromChild} />
        <p>
          I am parent : {this.state.childValue}
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
