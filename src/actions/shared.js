import {receiveUsers} from "./users";
import {receiveQuestions} from "./questions";
import {setAuthedUser} from "./authedUser";
import {_getQuestions, _getUsers} from "../utils/_DATA";
import {hideLoading, showLoading} from "react-redux-loading-bar";

function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

// redux thunk pattern
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, questions}) => {
                    dispatch(receiveUsers(users))
                    dispatch(receiveQuestions(questions))
                    dispatch(setAuthedUser(''))
                    dispatch(hideLoading())
                }
            )
    }
}

export function handleLoading(){
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(()=>dispatch(hideLoading()))
    }
}