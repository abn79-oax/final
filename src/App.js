import React from 'react';
import { Route, Redirect, withRouter, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';

function App() {
  return (
    <div className = {App-logo}>
      <Input type={"text"} label={"Usuario"} />
      <Input type={"password"} label={"Contraseña"} />
		</div>
  );
  // return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  // );
}

export default App;
