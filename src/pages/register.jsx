import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import Axios from "axios";
import { login } from '../redux/Action';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import './register.css';

class registerPage extends Component {
    register = () => {
        var fillUsername = this.text.value;
        var fillPassword = this.pass.value;
        var fillRole = "user";
        var numberRegex = /[0-9]/;
        var spcCharRegex = /[!@#$%^&*]/;
        
        Axios.get(`http://localhost:2000/login?username=${fillUsername}&password=${fillPassword}`)
            .then((res) => {
                if (res.data.length !== 0) {
                    return alert('ID sudah terambil');
                }
                if (fillPassword.length>=8){
                    if(numberRegex.test(fillPassword)){
                        if(spcCharRegex.test(fillPassword)){
                            document.getElementById('spcTrue').innerHTML=`
                            <p class="notifier-sukses">Password sudah memiliki sepsial karakter</p>
                            `
                            Axios.post('http://localhost:2000/login', {
                                username: fillUsername,
                                password: fillPassword,
                                role: fillRole
                            })
                            .then((res) => {
                                console.log(res);
                                console.log(res.data)
                                this.props.login(res.data)
                                
                            })
                            }
                            document.getElementById('numberTrue').innerHTML=`
                            <p class="notifier-sukses">Password sudah memiliki angka</p>
                            `
                    }
                    return (
                        document.getElementById('karakterTrue').innerHTML=`
                        <p class="notifier-sukses">Password sudah lebih dari 8 karakter</p>
                        `
                    )
                }

                
                else {
                    
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }



    render() {
        if(this.props.username!==''){
            return(
                <Redirect to='/'></Redirect>
            )
        }
        return (
            <div className='d-flex justify-content-center row'>
                <div >
                    <p>Username</p>
                    <Input type='text' innerRef={(text) => this.text = text} placeholder="Username"></Input>
                    <br />
                    <p>Password</p>
                    <Input type='password' innerRef={(pass) => this.pass = pass} placeholder="Password"></Input>
                    <br />
                    <Button onClick={this.register}> Sign Up </Button>
                        <p id='karakterTrue' className="notifier-gagal">Password harus lebih dari 8 karakter</p>
                        <p id='numberTrue' className="notifier-gagal">Password harus memiliki angka</p>
                        <p id='spcTrue' className="notifier-gagal">Password harus memiliki karakter spesial</p>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        username: state.user.username,
    }
}

export default connect(mapStatetoProps, { login })(registerPage);