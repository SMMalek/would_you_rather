import React, {useEffect} from "react";
import Nav from "./Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import LoadingBar from "react-redux-loading-bar";
import {handleLoading} from "../actions/shared";
import {connect} from "react-redux";

function NotFound() {
    return <h1>404</h1>
}

const App = props => {

    useEffect(() => {
        props.dispatch(handleLoading())
    }, []);


    return (
        <BrowserRouter>
            <LoadingBar/>
            <div className="App">
                <Nav/>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/question/:id' element={<QuestionPage/>}/>
                    <Route path='/new' element={<NewQuestion/>}/>
                    <Route path='/leaderboard' element={<LeaderBoard/>}/>
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default connect()(App);
