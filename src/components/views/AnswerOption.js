import React from 'react';

function AnswerOption (props) {
    
    console.log('AnswerOption props')
    console.log(props)

    return (
        <li className="answerOption">

            <input 
                type="radio"
                className = "radioCustomButton"
                name = "radioGroup"
                checked = {props.answerType === props.answer}
                id = {props.answerType}
                value = {props.answerType}
                disabled = {props.answer}
                onChange = {props.onAnswerSelected}
            />

            <label className = "radioCustomLabel" htmlFor = {props.answerType}>
            
                {props.answerContent}

            </label>

        </li>

    )

} // end function AnswerOption

export default AnswerOption;