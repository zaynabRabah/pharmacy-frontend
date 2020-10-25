import { authState, AuthAction } from "../models/redux/authTypes";

const initState: authState = {
    isAuthenticated: false,
    user:{
        type: "",
        fname: "",
        image: "",
        email: "",
    },
}
const authReducer = (state: authState = initState, action: AuthAction) => {
    
    if(action.type === 'INITIALIZE_USER_INFO') {
        if(action.user_info)
        return{
            ...state,
            isAuthenticated: true,
            user: action.user_info
        }
    }else if(action.type==='CLEAR_AUTH_STATE'){
        return{
          ...state,
            isAuthenticated: false,
            user: initState.user
        }
    }
    return state;
}
export default authReducer;