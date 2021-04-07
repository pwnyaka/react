import {createStore, combineReducers} from 'redux'
import {conversationsReducer} from './conversations'
import {messagesReducer} from './messages'
const reducers = combineReducers({messagesReducer, conversationsReducer})

export const store = createStore(reducers)