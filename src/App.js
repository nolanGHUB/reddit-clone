import React, { Component } from 'react';
import './App.css';

//custom components
import Post from './components/Post'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  

  render() {
    return (
      <div className="App">
        <Post />
      </div>
    );
  }
}

export default App;
