import React, {Component} from 'react'
import { connect } from 'react-redux'
import { login } from "../redux/Action";
import { Button,Input } from "reactstrap";
import Axios from "axios";
import { Link } from "react-router-dom"

class InputLogin extends Component{
    loginUser=()=>{
        let username = this.text.value;
        let password = this.pass.value;
        if(username==='' || password === ''){
            alert('Fill in all ther forms')
        } else {
            Axios.get(`http://localhost:2000/login?username=${username}&password=${password}`,{
                username,
                password
            })
            .then((res)=>{
                if(res.data.length===0){
                    alert('username or password invalid')
                } else {
                    this.props.login(res.data[0])
                    console.log(this.props.login(res.data[0]));
                    
                    this.text.value=null;
                    this.pass.value=null;
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }

    
    
    render(){
        return(
            <div className='d-flex justify-content-center row'>
                <div>
                    <Input type='text' innerRef={(text)=>this.text=text} placeholder="Username"></Input>
                    <br/>
                    <Input type='password' innerRef={(pass)=>this.pass=pass}placeholder="Password"></Input>
                    <br/>
                    <Link to='/'><Button onClick={this.loginUser}> Click Me! </Button></Link>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) =>{
    return{
        username: state.user.username,
        role: state.user.role
    }
}

export default connect(mapStatetoProps, {login})(InputLogin)