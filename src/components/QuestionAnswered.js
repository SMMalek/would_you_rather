import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Question = props => {

    const votesOne = props.question.optionOne.votes.length
    const votesTwo = props.question.optionTwo.votes.length
    const votesSum = votesOne + votesTwo
    const votesPercentOne = votesSum !== 0 && (votesOne / votesSum) * 100
    const votesPercentTwo = votesSum !== 0 && (votesTwo / votesSum) * 100

    let classnameone = ''
    let classnametwo = ''

    if (props.question.optionOne.votes.includes(props.authedUser)) {
        classnameone = 'answered-choice'
    } else {
        classnameone = 'unanswered-choice'
    }

    if (props.question.optionTwo.votes.includes(props.authedUser)) {
        classnametwo = 'answered-choice'
    } else {
        classnametwo = 'unanswered-choice'
    }

    return (
        <div className='center'>
            <h2>Result</h2>
            <div className={classnameone}>
                <h3>{props.question.optionOne.text}</h3>
                <progress id="progress-bar" value={votesPercentOne} max="100"/>
                <label>{votesOne} of {votesSum}</label>
            </div>
            <br/>
            <div className={classnametwo}>
                <h3>{props.question.optionTwo.text}</h3>
                <progress id="progress-bar" value={votesPercentTwo} max="100"/>
                <label>{votesTwo} of {votesSum}</label>
            </div>
        </div>
    )
}


function mapStateToProps({questions, authedUser}, {id}) {
    const question = questions[id]
    return {
        authedUser,
        questions,
        question: question
            ? question
            : null,
    }
}

export default connect(mapStateToProps)(Question)
