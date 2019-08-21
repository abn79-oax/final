import React from 'react';
import { Route, Redirect, withRouter, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import produce from 'immer/dist/immer';
import WebServices from './WebServices/WebServices';
import axios from "axios";

//function App() {
  class App extends React.PureComponent {
  state={
    user:{},
    password:{},
    server:"http://127.0.0.1:8000/api/apiPagos/" 
  };
  onChangeUser = (event) => {
    // console.log(event.target.value);
    const nextState = produce(this.state, (draft) => {
        draft.user = event.target.value;
    });
    this.setState(nextState);
  }
  onChangePassword = (event) => {
    // console.log(event.target.value);
    const nextState = produce(this.state, (draft) => {
      draft.password = event.target.value;
    });
    this.setState(nextState);
  }
  onClick= async (event) =>{
    // console.log(this.state.user);
    // console.log(this.state.password);
    const myServer=this.state.server+this.state.user+"/"+this.state.password+"/";
    // const response = await WebServices.getResponse({url:myServer});
    let res = await axios.get(myServer);
    console.log(myServer);
    // console.log(response);
  }
  render(){
    return (
      <div className = {App-logo}>
        <Input type={"text"} label={"Usuario"} onChange={this.onChangeUser} />
        <Input type={"password"} label={"Contraseña"} onChange={this.onChangePassword}/>
        <Button label={"Ingresar"} onClick={this.onClick}/>
      </div>
    );
  }7
}

export default App;
