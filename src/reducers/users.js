import {RECEIVE_USERS, UPDATE_USERS_ANSWERS, UPDATE_USERS_QUESTION} from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case UPDATE_USERS_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
        case UPDATE_USERS_ANSWERS :
            const {authedUser, qid, answer} = action
            console.log('ACTIONACTIONACTION', state, authedUser, qid, answer);
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        default :
            return state
    }
}