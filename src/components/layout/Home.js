import React, { Component } from 'react';

// import { connect } from 'react-redux';

import { Nav } from '../views';

class Home extends Component {

    render() {

        return (
            <div className="wrapper">
                <Nav />
                <div className="homeDiv">
                    <h1>Trivia Guru</h1>
                </div>
                <div className="howToDiv">
                    <h1>Getting Started</h1>
                    <ul>
                        <li>
                           <p>Register</p>
                        </li>
                        <li>
                            <p>Login</p>
                        </li>
                        <li>
                            <p>Pick a Category</p>
                        </li>
                        <li>
                            <p>Choose Solo or With A Friend</p>
                        </li>
                        <li>
                            <p>Players Take Turns Answering Questions</p>
                        </li>
                    </ul>
                </div>
            </div>
        )

    }

}

export default Home;