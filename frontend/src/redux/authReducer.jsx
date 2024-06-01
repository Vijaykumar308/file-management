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
                isAuthencated: true
            }

        case LOGOUT: 
            return {
                ...state,
                isAuthencated: false
            }
        default:
            return state;
    }

}

export default authReducer;