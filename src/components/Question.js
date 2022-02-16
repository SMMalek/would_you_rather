import React, {useState} from "react";
import {connect} from "react-redux";
import {handleAnswerQuestion} from "../actions/questions";

const Question = props => {

    const [answer,setAnswer] = useState('')

    const handleClick = e => {
        e.preventDefault()
        props.dispatch(handleAnswerQuestion(props.authedUser, props.id, answer))
    }

    const handleChange = e =>{
        setAnswer(e.target.value)
    }

    return (
        <div className='center'>
            <h2>Would you rather</h2>
            <form action="" method="post">
                <input
                    type="radio"
                    name="one"
                    value='optionOne'
                    onChange={handleChange}
                />
                <label>{props.question.optionOne.text}</label>
                <input
                    type="radio"
                    name="one"
                    value='optionTwo'
                    onChange={handleChange}
                />
                <label>{props.question.optionTwo.text}</label>
                <br/>
                <br/>
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}


function mapStateToProps({questions, authedUser}, {id}) {
    const question = questions[id]
    return {
        authedUser,
        question: question
            ? question
            : null,
    }
}

export default connect(mapStateToProps)(Question)

