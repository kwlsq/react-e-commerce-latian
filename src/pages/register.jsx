import React,{ Component } from "react";
import { Input,Button } from "reactstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

class registerPage extends Component{
    register=()=>{
        var fillUsername = this.text.value;
        var fillPassword = this.pass.value;
        var fillRole = "user"
        Axios.post('http://localhost:2000/login',{
            username: fillUsername,
            password: fillPassword,
            role: fillRole
        })
        .then((res)=>{
            console.log(res.data);
            alert('Sign Up Success!')
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div className='d-flex justify-content-center row'>
                <div >
                    <p>Username</p> 
                    <Input type='text' innerRef={(text)=>this.text=text} placeholder="Username"></Input>
                    <br/>
                    <p>Password</p>
                    <Input type='password' innerRef={(pass)=>this.pass=pass}placeholder="Password"></Input>
                    <br/>
                    <Link to='/'><Button onClick={this.register}> Sign Up </Button></Link>
                </div>
            </div>
        )
    }
}

export default registerPage;