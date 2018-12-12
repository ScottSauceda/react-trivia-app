import React from 'react';

import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Quiz(props) {

        function renderAnswerOptions(key) {
            return (
                <AnswerOption
                    key = {key.content}
                    answerContent = {key.content}
                    answerType = {key.type}
                    answer = {props.answer}
                    questionId = {props.questionId}
                    onAnswerSelected = {props.onAnswerSelected}
                />
            );
        } // end function renderAnswerOptions

        return (
            <ReactCSSTransitionGroup 
                className = "container"
                component = "div"
                transitionName = "fade"
                transitionEnterTimeout = {800}
                transitionLeaveTimeout = {500}
                transitionAppear
                transitionAppearTimeout = {500}
            >
                <div key = {props.questionId}>

                    <QuestionCount 
                        counter = {props.questionId}
                        total = {props.questionTotal}
                    />
                    
                    <Question content = {props.question} />

                    <ul className = "answerOptions">
                        {props.answerOptions.map(renderAnswerOptions)}
                    </ul>

                </div>
            </ReactCSSTransitionGroup>

        );

        // return(
        //     <div className = "quiz">

        //         <QuestionCount 
        //             counter = {props.questionId}
        //             total = {props.questionTotal}
        //         />
                
        //         <Question content = {props.question} />
                
        //         <ul className = "answerOptions">
        //             {props.answerOptions.map(renderAnswerOptions)}
        //         </ul>
        //     </div>
        // );

} // end function Quiz

export default Quiz;