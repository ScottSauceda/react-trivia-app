import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Nav } from '../views';
import { getAllTrivia } from '../../actions';
import { Question } from '../views/Question';

import Quiz from '../views/Quiz';
import Result from '../views/Result';



class NewTrivia extends Component {

    constructor(props) {
    
       super(props);
    

        // this.handleAnswerSelected = this.handleAnswerSelected.bind(this);

      } // end constructor

    componentWillMount() {
        this.props.getAllTrivia();
    } // end component Mount

    
    
    render(){



        let quiz;

        if(this.props.mapTrivia.questions !== null) {
            // console.log(this.props.mapTrivia.questions[0].questions)
           
           quiz = this.props.mapTrivia.questions[0].question
           
            
        } else {
             console.log('Trivia is empty');
             quiz = ''
        }

        return (
            <div>
                <Nav />
                heheheh
                {quiz}
            </div>
        );

    }

}

const mapStateToProps = state => ({
    mapTrivia: state.triviaFromStore
});

export default connect(mapStateToProps, {getAllTrivia})(NewTrivia);