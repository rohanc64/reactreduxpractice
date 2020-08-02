import { SIGN_IN,SIGN_OUT } from '../components/variableDeclarations';

const INITIAL_STATE = {
    isSignedIn: null,
    currentUserId : null
};

const authenticationReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case SIGN_IN :
            return {...state,isSignedIn: true, currentUserId : action.payload }
        case SIGN_OUT :
            return {...state,isSignedIn: false, currentUserId: null  }
        default:
            return state
    }
}

export default  authenticationReducer;