import React, { Component } from 'react';
import './App.css';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080')
class App extends Component {
  state = {
    data: undefined,
    status: "revel"
  }

  render() {
    socket.on('state', data => {
      this.setState({
        data: data.hello,
        status: data.status
      })
    })
    return (
      <div className= {'App ' + this.state.status}>
        {this.state.data}
      </div>
    );
  }
}

export default App;
