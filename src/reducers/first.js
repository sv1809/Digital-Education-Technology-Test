import { FIRST_DATA_LOADED } from "../constants/actionTypes";

const initialState = {
    title: "",
    description: "",
    items: [],
    colors: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FIRST_DATA_LOADED:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};