import React from 'react';
import { Route, Redirect, withRouter, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import produce from 'immer/dist/immer';
import WebServices from './WebServices/WebServices';
import axios from "axios";
import Popup from "reactjs-popup";


//function App() {
class App extends React.PureComponent {
  state={
    user:{},
    password:{},
    server:"http://127.0.0.1:8000/api/apiPagos/",
    id_user:0
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
    const myServer=this.state.server+this.state.user+"/"+this.state.password+"/";
    const response = await axios.get(myServer);
    const id = parseInt(response.data,10);
    if(id !== 0 ){      
        const nextState = produce(this.state, (draft) =>{
          draft.id_user = id;
        })
        this.setState(nextState);
        console.log("TCL: App -> onClick -> nextState", nextState);
    }
    else{
      console.log("fallo al loguearse");      
    }
  }

  render(){
    const {id_user} = this.state;
    {console.log("TCL: App -> render -> usr_id", id_user)}
    if (id_user !== 0 )
      return ( <Redirect to={'/roster'}/> );
    return(
      <Switch>
        <Route exact path='/' render={()=>this.Home()}/>
        {/* both /roster and /roster/:number begin with /roster */}
        <Route path='/roster' render={()=>this.roster()}/>
        {/* <Route path='/schedule' component={Schedule}/> */}
      </Switch>
    );
  }
  Home = () =>{
    return (
      <div >
         <Input type={"text"} label={"Usuario"} onChange={this.onChangeUser} />
         <Input type={"password"} label={"Contraseña"} onChange={this.onChangePassword}/>
         <Button label={"Ingresar"} onClick={()=>this.onClick()}/>
      </div>
    );
  }
  roster = () => {
    return (
      <div >
        <Input type={"text"} label={"Archivo"} onChange={this.onChangeUser} />
      </div>
    );
  }
}

export default App;
