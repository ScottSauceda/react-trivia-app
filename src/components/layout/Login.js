import React, { Component } from 'react';

import { Nav } from '../views'

class Login extends Component {

    render(){
        return(
            <div className="wrapper">
                <Nav />
                <div className="loginForm">
                    <h3>Please Login</h3>
                    <input type="text" placeholder="Email"></input>
                    <br />
                    <input type="text" placeholder="Password"></input>
                    <br />
                    <button >Submit</button>
                </div>

            </div>
        )
    }

}

export default Login