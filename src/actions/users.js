export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USERS_QUESTION = 'UPDATE_USERS_QUESTION'
export const UPDATE_USERS_ANSWERS = 'UPDATE_USERS_ANSWERS'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function updateUserQuestions(question) {
    return {
        type: UPDATE_USERS_QUESTION,
        question,
    }
}

export function updateUserAnswers({authedUser, qid, answer}) {
    return {
        type: UPDATE_USERS_ANSWERS,
        authedUser,
        qid,
        answer,
    }
}