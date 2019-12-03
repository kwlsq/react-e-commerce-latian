import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from "../redux/Action";
import { Button, Input } from "reactstrap";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class InputLogin extends Component {
    loginUser = () => {
        let username = this.text.value;
        let password = this.pass.value;
        if (username === '' || password === '') {
            alert('Fill in all ther forms')
        } else {
            Axios.get(`http://localhost:2000/login?username=${username}&password=${password}`, {
                username,
                password
            })
                .then((res) => {
                    if (res.data.length === 0) {
                        alert('username or password invalid')
                    } else {
                        console.log(res.data[0]);
                        this.props.login(res.data[0])
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    render() {
        if (this.props.username !== '') {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <div className='d-flex justify-content-center row'>
                <div>
                    <p>Username</p>
                    <Input type='text' innerRef={(text) => this.text = text} placeholder="Username"></Input>
                    <br />
                    <p>Password</p>
                    <Input type='password' innerRef={(pass) => this.pass = pass} placeholder="Password"></Input>
                    <br />
                    <Button onClick={this.loginUser}> Sign In </Button>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        username: state.user.username,
        role: state.user.role
    }
}

export default connect(mapStatetoProps, { login })(InputLogin)