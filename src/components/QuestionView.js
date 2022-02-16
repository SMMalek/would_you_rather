import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const QuestionView = props => {

    return (
        <Link to={`/question/${props.id}`}  className='center' style={{width:'500px'}} >
            <h2>Would you rather</h2>
            <label>{props.question.optionOne.text}</label>
            <h4>OR</h4>
            <label>{props.question.optionTwo.text}</label>
        </Link>
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

export default connect(mapStateToProps)(QuestionView)

// <div>
// <h3 className='center'>Your Timeline</h3>
// {
//     props.loading
//         ? <div className='center'>
//             {null}
//         </div>
//         :
//         <ul className='dashboard-list'>
//             {props.tweetIds.map((id) => (
//                 <li key={id}>
//                     <Tweet id={id}/>
//                 </li>
//             ))}
//         </ul>
// }
// </div>