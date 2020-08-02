import { SIGN_IN,SIGN_OUT } from '../components/variableDeclarations'

export const signin = (CurrentUserId) => {
    
    return {type: SIGN_IN, payload: CurrentUserId }
}

export const signout = () => {
    return {type: SIGN_OUT }
}

export const streamcreate = (formValues) => {
    return {type :() => 'hello'}
}