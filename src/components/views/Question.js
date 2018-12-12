import React from 'react';

function Question(props) {
    return (
        <h2 className = "question">
            {props.content}
        {/* <p>{props.trivias.questions[0].answers[0].content} </p> */}
        </h2>
    );
}

export default Question;