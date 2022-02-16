import {_saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";
import {updateUserAnswers, updateUserQuestions} from "./users";
import {hideLoading, showLoading} from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTIONS,
        question,
    }
}

function answerQuestion({authedUser, qid, answer}) {
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

export function handleAnswerQuestion(authedUser, qid, answer) {
    return (dispatch) => {
        dispatch(showLoading())
        dispatch(answerQuestion({authedUser, qid, answer}))
        dispatch(updateUserAnswers({authedUser, qid, answer}))
        return _saveQuestionAnswer({authedUser, qid, answer})
            .then(dispatch(hideLoading()))
    }
}

export function handleAddQuestion(textOne, textTwo, authedUser) {
    return (dispatch) => {
        dispatch(showLoading())

        return _saveQuestion({
            optionOneText: textOne,
            optionTwoText: textTwo,
            author: authedUser,
        }).then((question) => {
            dispatch(addQuestion(question))
            dispatch(updateUserQuestions(question))
        })
            .then(() => dispatch(hideLoading())
            )
    }
}

