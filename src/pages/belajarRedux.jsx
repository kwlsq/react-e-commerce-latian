import React, { Component } from "react";
import { logout, halo } from '../redux/Action'
import { connect } from "react-redux";

class Belajar extends Component {
    render() {
        return (
            <div>
                {
                    this.props.username
                    ?
                    <h1>{this.props.username}</h1>
                    :
                    <h1>Login Dulu</h1>
                }
                <button onClick={this.props.logout}>Click Me</button>
                <button onClick={this.props.halo}>Ubah Text</button>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        username: state.user.username
    }
}


export default connect(mapStatetoProps, { logout, halo })(Belajar);