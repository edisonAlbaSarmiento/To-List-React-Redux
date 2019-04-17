import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostForm from './components/PostForm'
import AllPost from './components/AllPost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React!</h1>
        <PostForm/>
        <AllPost/>
      </div>
    );
  }
}

export default App;
