import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'
import DogImage from './components/dogImages'

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <div className="App">
      <h1>Dog Images</h1>
      <DogImage />
    </div>
  );
}

export default App;
