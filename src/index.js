import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

const scoreReducer = (state = { feeling: 0, understanding: 0, support: 0 }, action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return Object.assign(state, { feeling: action.payload })

        case 'SET_UNDERSTANDING':
            return Object.assign(state, { understanding: action.payload })

        case 'SET_SUPPORT':
            return Object.assign(state, { support: action.payload })

        case 'RESET_ALL':
            return Object.assign(state, { feeling: 0, understanding: 0, support: 0 })

        default:
            return state
    }
}

const feedbackReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_FEEDBACK':
            return action.payload

        case 'RESET_ALL':
            return ''

        default:
            return state
    }
}

const storeInstance = createStore(
    combineReducers({
        scoreReducer,
        feedbackReducer
    }), applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
