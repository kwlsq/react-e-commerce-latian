const INITIAL_STATE = {
    username:'',
    role: ''
}

const authReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                username:action.payload.username,
                role:action.payload.role
            }
        case 'LOGOUT':
            return INITIAL_STATE
        default:
                return state
    }
}

export default authReducer;