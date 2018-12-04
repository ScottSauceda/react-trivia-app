import React, { Component } from 'react';

class Nav extends Component {

    render() {
        return (
            <nav>
                <ul className="navLI">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/register">Register</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/categories">Categories</a>
                    </li>
                    <li>
                        <a href="/trivia">Trivia</a>
                    </li>
                </ul>
            </nav>
        )
    }

}
export default Nav;