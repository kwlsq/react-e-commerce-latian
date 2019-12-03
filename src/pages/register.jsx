import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import Axios from "axios";
import { login } from '../redux/Action';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class registerPage extends Component {
    register = () => {
        var fillUsername = this.text.value;
        var fillPassword = this.pass.value;
        var fillRole = "user";


        Axios.get(`http://localhost:2000/login?username=${fillUsername}&password=${fillPassword}`)
            .then((res) => {
                if (res.data.length !== 0) {
                    return alert('ID sudah terambil');
                }
                else {
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
                    {/* <Link to='/'> */}
                        <Button onClick={this.register}> Sign Up </Button>
                    {/* </Link> */}
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