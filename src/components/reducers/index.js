import { combineReducers } from 'redux';
import authReducer from './authReducer';
import ingrReducer from './ingrReducer';


// Actions
export default combineReducers({
    auth: authReducer,
    ingredients: ingrReducer
});