import React, { Component } from 'react';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import store from './store';
import AlbumsListContainer from './AlbumsListContainer';
import './App.css';

class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <AlbumsListContainer />
          </div>
        </Provider>
      );
    }
}

export default App;
