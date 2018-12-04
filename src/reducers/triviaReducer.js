import { GET_QUESTIONS } from '../constants';

const initialState = {
    questions: null  
}

export default (state = initialState, action) => {
    let updated = Object.assign({}, state)

    switch(action.type) {
        case GET_QUESTIONS:
            
            let questions = action.payload

            
            console.log('action.payload')
            console.log(questions)

            let questionsObject = {}
            let parsedQuestions = [];

            for(let i = 0; i < questions.length; i++) {
                questionsObject.category = questions[i]['category']
                questionsObject.questions = questions[i].questions
                parsedQuestions.push(questionsObject)
            }
            questions = parsedQuestions;

            updated.questions = questions

            

            console.log('questions from trivia reducer')
            console.log(questions)

            return updated

        default:
            return state

    }

}