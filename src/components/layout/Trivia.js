import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Nav } from '../views';
import { getAllTrivia } from '../../actions';
import { Questions } from '../views';

class Trivia extends Component {


    componentDidMount() {
        this.props.getAllTrivia()
    }

    render() {

        let trivia
           
            if(this.props.mapTrivia.questions !== null) {
                console.log(this.props.mapTrivia.questions)
                trivia = this.props.mapTrivia.questions.map((trivias, index) => {
                    return(
                        <div key ={index}>
                            <Questions trivias = {trivias} />
                        </div>
                    )
                })
            } else {
                trivia = 'Trivia is empty';
            }
            return(
                <div>
                    <Nav />
                    {trivia}
                </div>
            )
    }
}

const mapStateToProps = state => ({
    mapTrivia: state.triviaFromStore
});

export default connect(mapStateToProps, {getAllTrivia})(Trivia);