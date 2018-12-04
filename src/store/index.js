import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import { triviaReducer, userReducer } from '../reducers';

const reducers = combineReducers({
    triviaFromStore: triviaReducer,
    user: userReducer
});

const intialState = {};

const middleware = [thunk];

const store = createStore(reducers, intialState, compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
))// end store

export default store;