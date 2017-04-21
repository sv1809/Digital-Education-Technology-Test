import { SIDE_MENU_ITEMS_LOADED } from "../constants/actionTypes";

const initialState = {
    items: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SIDE_MENU_ITEMS_LOADED:
            return Object.assign({}, state, { items: action.items });
        default:
            return state;
    }
};