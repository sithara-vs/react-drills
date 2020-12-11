import React, {Component} from 'react';
class Login extends Component {

    constructor(){
        super();
        this.state = {
            userid: "",
            password :""
        };
        this.handleLogin = this.handleLogin.bind(this)
    }
        handleUser(name){
            this.setState({userId : name});
        }
        handlePassword(pass){
            this.setState({password:pass});
        }
        handleLogin()
        {
            alert(`Username: ${this.state.userId} Password: ${this.state.password}`);
        }


        render(){
            return(
                <div>
                    <input onChange = {e=> this.handleUser(e.target.value)} type='text'/>
                    <input onChange = {e=> this.handlePassword(e.target.value)} type='password'/>
                    <button onClick ={this.handleLogin}>Login</button>               
                </div>
            );
        }
    }
export default Login;
