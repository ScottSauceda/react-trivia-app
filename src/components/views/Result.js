import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {
    return (
        <ReactCSSTransitionGroup
        
        >

            <div>
                You got 
                <strong> {props.quizResult} </strong> !
            </div>

        </ReactCSSTransitionGroup>
    );
}

export default Result;