import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import {usersReducer} from './users-reducer';

const reducers = combineReducers({
    users: usersReducer,
    // возможность для расширения
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
export default store