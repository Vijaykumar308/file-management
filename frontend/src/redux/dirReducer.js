import { CREATE_DIR } from "./dirActions";

const initialState = {
  dir: {},
};

const dirReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DIR:
      return {
        ...state,
        dir: action.payload,
      };
    default:
      return state;
  }
};

export default dirReducer;