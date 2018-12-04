import { 
    GET_ERRORS,
    GET_QUESTIONS,
    SIGN_USER_UP
} from '../constants'

import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*'
    } // end headers
}); // end Axios

export const createUser = (userData, history) => dispatch => {
    Axios
        .post('/users/register', userData)
        //**** THIS ROUTER MUST MATCH THE USER REGISTER ROUTE ON OUR EXPRESS BACKEND
        // .then(res => {
        //     history.push('/')
        //     return res;
        // })// end .then
        .then(user => {
            console.log('-----')
            console.log(user)
            dispatch({
                type: SIGN_USER_UP,
                data: user
            }) // end dispatch
            alert('Registered Successfully')
        }) // end .then
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_ERRORS,
                data: err
            })
        })
} // end const createUser

export const getAllTrivia = () => dispatch => {
    Axios.get('/questions/allQuestions')
    .then(trivia => {
        console.log('our data from getalltrivia in actions')
        console.log(trivia)
        dispatch({
            type: GET_QUESTIONS,
            payload: trivia.data.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}