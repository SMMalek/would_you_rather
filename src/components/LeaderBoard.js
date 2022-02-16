import React from "react";
import {connect} from "react-redux";
import Avatar from "./Avatar";

const LeaderBoard = props => {

    let name = ''
    let uid = ''
    let answers_num = 0
    let questions_num = 0
    let score = 0
    let arr = []

    Object.keys(props.users).map(id => {
        name = props.users[id].name
        uid = props.users[id].id
        answers_num = Object.keys(props.users[id].answers).length
        questions_num = props.users[id].questions.length
        score = answers_num + questions_num

        arr = arr.concat({name, uid, answers_num, questions_num, score})

    })

    arr.sort((a, b) => {
        return b.score - a.score
    })

    return (
        <div className='lb-container'>
            {arr.map(item => {
                return (
                    <div className='lb-center' key={item.uid}>
                        <Avatar key={item.uid} userID={item.uid}/>
                        <h3>{item.name}</h3>
                        <h4>Number of questions answered: {item.answers_num}</h4>
                        <h4>Number of question posted: {item.questions_num}</h4>
                        <h2>Score is {item.answers_num + item.questions_num}</h2>
                        <br/>
                        <br/>
                    </div>
                )

            })}
        </div>
    )
}


function mapStateToProps({users}) {
    return {
        users,
    }
}

export default connect(mapStateToProps)(LeaderBoard)