import {legacy_createStore,combineReducers, applyMiddleware } from 'redux'
import { reducer as register } from './Reducers/Register/Reducer'
import {reducer as login} from "./Reducers/Login/Reducer"
import {reducer as mynotes} from "./Reducers/Mynotes/Reducer"
import {reducer as single} from "./Reducers/SingleNote/Reducer"
import {reducer as deletedata} from "./Reducers/DeleteNote/Reducer"
import thunk from 'redux-thunk'
import {reducer as create} from "./Reducers/NotesCreate/Reducer"
const rootreducer=combineReducers({register,login,mynotes,create,deletedata,single})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))