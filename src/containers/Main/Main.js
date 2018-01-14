import React, { Component } from 'react';

class Main extends Component {
  state = {
    test: 'Main',
  }
  render() {
    return <div>{this.state.test}</div>;
  }
}
export default Main;
