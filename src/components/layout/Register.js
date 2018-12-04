import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import { Nav } from '../views';
import { createUser } from '../../actions';

class Register extends Component {
    state = {
        email: '',
        emailTwo: '',
        username: '',
        password: '',
        passwordTwo: '',
        errors: {},
        redirect :false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to='/login' />
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if(prevProps.errors !== this.props.errors) {

            this.updateErrorState(this.props.errors)

        } // end if(prevProps.errors)

    } // end componentDidUpdate

    updateErrorState = (errors) => {
        this.setState({ errors: errors })
    } // end updateErrorState
    
    registerHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })  // end this.setState
    } // end registerHandler

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)

        const newUser = {
            email: this.state.email,
            emailTwo: this.state.emailTwo,
            username: this.state.username,
            password: this.state.password,
            passwordTwo: this.state.passwordTwo
        } // end newUser
        this.props.createUser(newUser)
        e.target.reset()
    } // end submitHandler

    render() {
        const errors = {}
        return (
            <React.Fragment>
            <div className="wrapper">
                <Nav />
                <div className="loginForm">

                <form className="form" onSubmit = {this.submitHandler}>

                    <h3>Register</h3>

                    <input type="text" placeholder="Email" name="email" onChange={this.registerHandler} value={this.state.name} error = {errors.name}></input>

                    <br />
                    <br />

                    <input type="text" placeholder="Confirm Email" name="emailTwo" onChange={this.registerHandler} value={this.state.emailTwo} error = {errors.emailTwo}></input>

                    <br />
                    <br />

                    <input type="text" placeholder="Username" name="username" onChange={this.registerHandler} value={this.state.username} error = {errors.username}></input>

                    <br />
                    <br />

                    <input type="text" placeholder="Password" name="password" onChange={this.registerHandler} value={this.state.password} error ={this.state.password}></input>

                    <br />
                    <br />

                    <input type="text" placeholder="Confirm Password" name="passwordTwo" onChange={this.registerHandler} value={this.state.passwordTwo} error ={this.state.passwordTwo}></input>

                    <br />
                    <br />

                    {this.renderRedirect}
                    <button className="misterSubmitButton" onClick={this.setRedirect}>Submit</button>

                    </form>{/*  end form */}
                </div>

            </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => ({
    user: state.user
})
export default connect(mapStateToProps, {
    createUser })(withRouter(Register))