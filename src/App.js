import React from 'react';
import { Route, Redirect, withRouter, Switch, Link } from 'react-router-dom';

import './App.css';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import produce from 'immer/dist/immer';

import axios,{post} from "axios";
import {uploadFile} from "./components/Functions.js";
class App extends React.PureComponent {
   state = {
        file:undefined,
        preview:undefined,
        user: "",
        password: "",
        server: "https://qsefip.finanzasoaxaca.gob.mx/UISF/public/api/apiPagos/",
        id_user:0
    };
    subirArchivo = () => {
        uploadFile(this.state.file,this.state.id_user).then((res) => {
            console.log(res);
        });
    }


    onChangeUser = (event) => {
        const nextState = produce(this.state, (draft) => {
        draft.user = event.target.value;
        });
        this.setState(nextState);
    }
    onChangePassword = (event) => {
        
        const nextState = produce(this.state, (draft) => {
        draft.password = event.target.value;
        });
        this.setState(nextState);
    }

    onChangeUpload =(e) =>{
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = function (ev) {
                this.setState({ preview: ev.target.result });
            }.bind(this);
                reader.readAsDataURL(e.target.files[0]);
            }
            const nextState = produce(this.state, (draft) => {
                draft.file = e.target.files[0];
            });
            this.setState(nextState);
    }

  onClick = async (event) => {
    const myServer = this.state.server + this.state.user + "/" + this.state.password ;
    const response = await axios.get(myServer);
    const id = parseInt(response.data, 10);
    console.log("TCL: App -> onClick -> id", id)

    if (id !== 0) {
      const nextState = produce(this.state, (draft) => {
        draft.id_user =id;
      })
      this.setState(nextState);
      console.log("TCL: App -> onClick -> nextState", nextState);
    }
    else {
      console.log("fallo al loguearse");
    }
  }

  render() {
    const { id_user } = this.state;
    
    if(id_user !=0){
        return this.roster();
    }
      

    return (
      <Switch>
        <Route exact path='/' render={() => this.Home()} />
        <Route exact path='/Home' render={() => this.Home()} />
        <Route exact path='/roster' render={() => this.roster()} />
        <Redirect to={'/'} />
      </Switch>
    );
  }
  Home = () =>
  {
    return (
      <div >
          { this.state.id_user }
        <Input type={"text"} label={"Usuario"} onChange={this.onChangeUser} value="alvaroburgoa@gmail.co"/>
        <Input type={"password"} label={"Contraseña"} onChange={this.onChangePassword} value="inicial201" />
        <Button label={"Ingresar"} onClick={() => this.onClick()} />
      </div>
    );
  }
  roster = () => {
   
    return (
      <div >
        
          <h1>File Upload</h1>
          <Input type={'file'} onChange={this.onChange}  onChange={ (event) => this.onChangeUpload(event) }/>
          <Button type="button" label={'Upload'} onClick={this.subirArchivo} />
          <br/>
          <img src={this.state.preview} alt="..." />
        
      </div>
    );
  }
}

export default App;
