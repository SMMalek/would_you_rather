import React from 'react'
import {NavLink} from 'react-router-dom'
import Avatar from "./Avatar";
import {setAuthedUser} from "../actions/authedUser";
import {connect} from "react-redux";

const Nav = props => {

    const handleClick = () => {
        props.dispatch(setAuthedUser(''))
    }

    return (
        <div className='nav-container'>
            <div className='nav-left'>
                <nav className='nav'>
                    <ul>
                        <li>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/new'>
                                New Question
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/leaderboard'>
                                Leader Board
                            </NavLink>
                        </li>
                        <li>
                            <button className='auth-btn' onClick={handleClick}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='nav-right'>
                {props.users[props.authedUser] && <h3>{props.users[props.authedUser].name}</h3>}
                <Avatar/>
            </div>
        </div>
    )
}

function mapStateToProps({authedUser, users}) {
    return {
        authedUser,
        users,
    }
}

export default connect(mapStateToProps)(Nav)