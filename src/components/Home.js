import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import QuestionView from "./QuestionView";


const Home = props => {

    const [listSwitch, setListSwitch] = useState('unAnswered')
    const [s1, setS1] = useState({
        fontWeight: '600',
        outline: '0',
        borderWidth: '2px'
    })
    const [s2, setS2] = useState({})


    const handleSwitch = e => {
        setListSwitch(e.target.value)
        if (e.target.value === 'unAnswered') {
            setS1({
                fontWeight: '600',
                outline: '0',
                borderWidth: '2px'
            })
            setS2({})
        } else {
            setS1({})
            setS2({
                fontWeight: '600',
                outline: '0',
                borderWidth: '2px'
            })
        }
    }

    let answeredQuestionIDs = []
    let UnAnsweredQuestionIDs = []

    Object.values(props.questions).map(question => {
        if (question.optionOne.votes.includes(props.authedUser)
            ||
            question.optionTwo.votes.includes(props.authedUser)) {
            answeredQuestionIDs = answeredQuestionIDs.concat([question.id])
        } else {
            UnAnsweredQuestionIDs = UnAnsweredQuestionIDs.concat([question.id])
        }
    })


    return (

        <div>
            {
                props.loading
                    ? <div className='center'>
                        Loading . . .
                    </div>
                    :
                    <div className='center'>
                        <button
                            className='btn'
                            onClick={handleSwitch}
                            value='unAnswered'
                            style={s1}
                        >
                            unAnswered
                        </button>
                        <button
                            className='btn'
                            onClick={handleSwitch}
                            value='Answered'
                            style={s2}
                        >
                            Answered
                        </button>
                        {
                            listSwitch === 'unAnswered'
                                ?
                                UnAnsweredQuestionIDs.length === 0
                                    ?
                                    <h4>Nothing</h4>
                                    :
                                    <ul className='dashboard-list'>
                                        {UnAnsweredQuestionIDs.map(id => (
                                            <li key={id}>
                                                <QuestionView id={id}/>
                                            </li>
                                        ))}
                                    </ul>
                                :
                                answeredQuestionIDs.length === 0
                                    ?
                                    <h4>Nothing</h4>
                                    :
                                    <ul className='dashboard-list'>
                                        {answeredQuestionIDs.map(id => (
                                            <li key={id}>
                                                <QuestionView id={id}/>
                                            </li>
                                        ))}
                                    </ul>
                        }
                    </div>
            }
        </div>
    )
}

function mapStateToProps({questions, authedUser}) {
    return {
        questions,
        authedUser,
        questionsIds: Object.keys(questions),
        loading: authedUser === null

    }
}

export default connect(mapStateToProps)(Home)
