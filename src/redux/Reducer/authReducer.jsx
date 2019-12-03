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
            alert('Log Out Successful')
            return INITIAL_STATE
        case 'HALO':
            return {
                ...state,
                username:'Halo'
            }
        default:
                return state
    }
}

export default authReducer;