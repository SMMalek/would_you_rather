import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import {setAuthedUser} from "../actions/authedUser";
import App from './App'

const Auth = props => {


    const [selected, setSelected] = useState('')
    const [loggedUser, setLoggedUser] = useState('')


    useEffect(() => {
        props.dispatch(handleInitialData())
    }, []);

    useEffect(() => {
        props.dispatch(setAuthedUser(loggedUser))
    }, [loggedUser]);

    const usersList = Object.keys(props.users).map(key => {
        return {name: props.users[key].name, id: key}
    })

    const handleSelect = selectedOption => {
        setLoggedUser('')
        setSelected(selectedOption.target.value)
    }

    const handleClick = () => {
        setLoggedUser(selected)
        setSelected('')
    }

    if (props.authedUser !== '') {
        return <App/>
    } else {
        return (
            <div className='auth-wrapper'>
                <select className='auth' value={selected} onChange={handleSelect}>
                    <option value='DEFAULT' hidden>select user</option>
                    {usersList.map(element => {
                        return <option key={element.id} value={element.id}>{element.name}</option>
                    })}
                </select>
                <button className='auth-btn' onClick={handleClick}>Login</button>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Auth)