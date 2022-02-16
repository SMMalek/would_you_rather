import {ADD_QUESTIONS, RECEIVE_QUESTIONS, SAVE_ANSWER} from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTIONS :
            return {
                ...state,
                [action.question.id]: action.question,
            }
        case SAVE_ANSWER :
            const {authedUser, qid, answer} = action
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat(authedUser)
                    },
                },
            }
        default :
            return state
    }
}