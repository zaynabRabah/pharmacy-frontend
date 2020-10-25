import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { AppActions } from './models/redux';

function App() {
  const x = useSelector((state: AppActions) =>state.orders )
  console.log(x)
  return (
    <div className="App">
      gggggggggggggggggggg

    </div>
  );
}

export default App;
