import React from "react";
import {connect} from "react-redux";
import {useParams} from "react-router";
import Question from "./Question";
import QuestionAnswered from "./QuestionAnswered";
import {useNavigate} from "react-router-dom";

const QuestionPage = props => {

    const navigate = useNavigate()
    const {id} = useParams()

    if(!props.authedUser)return <></>
    if(!Object.keys(props.questions).includes(id)){return <>{navigate('/asdasd')}</>}
    if (props.questions[id].optionOne.votes.includes(props.authedUser)
        ||
        props.questions[id].optionTwo.votes.includes(props.authedUser)) {
        return <QuestionAnswered id={id}/>
    } else {
        return <Question id={id}/>
    }

}

function mapStateToProps({questions, authedUser}) {
    return {
        questions,
        authedUser,
    }
}

export default connect(mapStateToProps)(QuestionPage)
