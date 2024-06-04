export const AUTHENCATION = "AUTHENCATION";
export const LOGOUT = "LOGOUT";

const initialState = {
    isAuthencated: false
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case AUTHENCATION:
            
            return {
                ...state,
                isAuthencated: action.payload || false
            }

        case LOGOUT: 
            localStorage.removeItem("user");

            return {
                ...state,
                
                isAuthencated: false,
            }

        default:
            return state;
    }

}

export default authReducer;