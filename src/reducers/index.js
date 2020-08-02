import { combineReducers } from 'redux'; 
import AuthenticationReducers from './authenticationReducer';


export default combineReducers({
    GoogleAuthentication: AuthenticationReducers
});