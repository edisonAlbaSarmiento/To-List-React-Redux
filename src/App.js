import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostForm from './components/PostForm'
import AllPost from './components/AllPost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='navbar'>
          <h1>Ingresar nuevo post!</h1>
        </div>
        <PostForm/>
        <AllPost/>
      </div>
    );
  }
}

export default App;
