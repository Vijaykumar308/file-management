export const AUTHENCATION = "AUTHENCATION";

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

        default:
            return state;
    }

}

export default authReducer;