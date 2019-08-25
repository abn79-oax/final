import * as React from 'react';

class Home extends React.Component{
    
    render (){
        return 
            <div >
                <Input type={"text"} label={"Usuario"} onChange={this.onChangeUser} />
                <Input type={"password"} label={"Contraseña"} onChange={this.onChangePassword} />
                <Button label={"Ingresar"} onClick={() => this.onClick()} />
            </div>
    
    }
}

export default Home;