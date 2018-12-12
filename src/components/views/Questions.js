import React, { Component } from 'react';

const Questions = (props) => {

    // this page displays the views for the list of trivia questions, and works in tandem with Trivia Page in containers folder

    console.log('Question.js view page code')
    console.log(props.trivias)

    return (
        <div>
            <h1>{props.trivias.questions[0].question}</h1>
            <p>{props.trivias.questions[0].answers[0].content}</p>
            <p>{props.trivias.questions[0].answers[1].content}</p>
            <p>{props.trivias.questions[0].answers[2].content}</p>
            <p>{props.trivias.questions[0].answers[3].content}</p>

                <br />

            <h1>{props.trivias.questions[1].question}</h1>
            <p>{props.trivias.questions[1].answers[0].content}</p>
            <p>{props.trivias.questions[1].answers[1].content}</p>
            <p>{props.trivias.questions[1].answers[2].content}</p>
            <p>{props.trivias.questions[1].answers[3].content}</p>
        </div>
    )

}

export default Questions;

// this page displays the views for list of questions, and works in tandem with the Trivia page in containers folders