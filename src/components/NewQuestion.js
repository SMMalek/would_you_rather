import React, {useState} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import { handleAddQuestion} from "../actions/questions";

const NewQuestion = props => {

    const navigate = useNavigate()
    const [textOne, setTextOne] = useState('')
    const [textTwo, setTextTwo] = useState('')

    const handleClick = e => {
        e.preventDefault()
        props.dispatch(handleAddQuestion(textOne, textTwo, props.authedUser))
        setTextOne('')
        setTextTwo('')
        navigate('/')
    }
    const handleChangeOne = e => {
        e.preventDefault()
        setTextOne(e.target.value)
    }
    const handleChangeTwo = e => {
        e.preventDefault()
        setTextTwo(e.target.value)
    }

    return (
        <div className='new-center'>
            <h1>New Poll</h1>
            <h3>Would You rather</h3>
            <input onChange={handleChangeOne} placeholder='Enter First Choice' value={textOne} style={{margin:'1em'}}/>
            <br/>
            or
            <br/>
            <input onChange={handleChangeTwo} placeholder='Enter Second Choice' value={textTwo} style={{margin:'1em'}}/>
            <br/>
            <br/>
            <button
                onClick={handleClick}
                disabled={textOne === '' || textTwo === ''}
            >
                Submit
            </button>
        </div>
    )
}


function mapStateToProps({questions, users, authedUser}) {
    return {
        authedUser,
        users,
        questions,
    }
}

export default connect(mapStateToProps)(NewQuestion)
