import React, { Component } from 'react';

const Questions = (props) => {

    // this page displays the views for the list of trivia questions, and works in tandem with Trivia Page in containers folder

    console.log('Question.js view page code')
    console.log(props.trivias)

    return (
        <div>
            <h1>{props.trivias.questions[0].question}</h1>
            <p>{props.trivias.questions[0].answer1}</p>
            <p>{props.trivias.questions[0].answer2}</p>
            <p>{props.trivias.questions[0].answer3}</p>
            <p>{props.trivias.questions[0].answer4}</p>

                <br />

            <h1>{props.trivias.questions[1].question}</h1>
            <p>{props.trivias.questions[1].answer1}</p>
            <p>{props.trivias.questions[1].answer2}</p>
            <p>{props.trivias.questions[1].answer3}</p>
            <p>{props.trivias.questions[1].answer4}</p>
        </div>
    )

}

export default Questions;

// this page displays the views for list of questions, and works in tandem with the Trivia page in containers folders