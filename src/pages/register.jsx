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
                    return (
                        document.getElementById('karakterTrue').innerHTML=`
                        <p class="notifier-sukses">Password sudah lebih dari 8 karakter</p>
                        `
                    )
                } 

                if(numberRegex.test(fillPassword)){
                    return (
                        document.getElementById('numberTrue').innerHTML=`
                        <p class="notifier-sukses">Password sudah memiliki angka</p>
                        `
                    )
                }

                if(spcCharRegex.test(fillPassword)){
                    return (
                        document.getElementById('spcTrue').innerHTML=`
                        <p class="notifier-sukses">Password sudah memiliki special karakter</p>
                        `
                    )
                }
                
                else if(fillPassword.length>=8 && numberRegex.test(fillPassword) && spcCharRegex.test(fillPassword)) {
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
                else {
                    return (
                        document.getElementById('divNotifier').innerHTML=`
                        <p id='karakterTrue' class="notifier-gagal">Password harus lebih dari 8 karakter</p>
                        <p id='numberTrue' class="notifier-gagal">Password harus memiliki angka</p>
                        <p id='spcTrue' class="notifier-gagal">Password harus memiliki spesial karakter</p>
                        `
                    )
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
                    <div id='divNotifier'>
                        <p id='karakterTrue' className="notifier-gagal">Password harus lebih dari 8 karakter</p>
                        <p id='numberTrue' className="notifier-gagal">Password harus memiliki angka</p>
                        <p id='spcTrue' className="notifier-gagal">Password harus memiliki spesial karakter</p>
                    </div>
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