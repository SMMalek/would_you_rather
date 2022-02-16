import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import Auth from "./components/Auth";
import LoadingBar from "react-redux-loading-bar";

const store = createStore(reducer, middleware)

ReactDOM.render(
    <Provider store={store}>
        <LoadingBar/>
        <Auth/>
    </Provider>,
    document.getElementById('root')
);
