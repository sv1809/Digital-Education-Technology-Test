import { FIRST_DATA_LOADED, SET_FISR_IS_ARCHIVED } from "../constants/actionTypes";

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
        case SET_FISR_IS_ARCHIVED: {
            const ind = state.items.findIndex(i => i.id === action.id);
            const newItem = Object.assign({}, state.items[ind], { isArchived: action.value });
            return Object.assign({}, state, {
                items: [
                    ...state.items.slice(0, ind),
                    newItem,
                    ...state.items.slice(ind + 1)

                ]
            });
        }
        default:
            return state;
    }
};