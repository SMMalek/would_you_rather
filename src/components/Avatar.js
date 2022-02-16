import React from "react";
import {connect} from "react-redux";

const Avatar = props => {
    const {users, authedUser} = props

    return (
        authedUser
            ?
            props.userID
                ?
                <div className='profile-picture'>
                    <img
                        src={users[props.userID].avatarURL}
                        alt={`Avatar of ${users[props.userID].name}`}
                        className='avatar2'
                    />
                </div>
                :
                <div className='profile-picture'>
                    <img
                        src={users[authedUser].avatarURL}
                        alt={`Avatar of ${users[authedUser].name}`}
                        className='avatar'
                    />
                </div>
            : null
    )
}

function mapStateToProps({authedUser, users}, {userID}) {
    return {
        authedUser,
        users,
        userID,
    }
}

export default connect(mapStateToProps)(Avatar)