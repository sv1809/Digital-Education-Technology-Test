import {
    FIRST_DATA_LOADED,
    SET_FISR_IS_ARCHIVED,
    ADD_REMOVE_FIRST_FILTER_COLOR,
    SET_FIRST_FILTER_ARCHIVE,
    SET_FIRST_FILTER_TEXT
} from "../constants/actionTypes";
import * as isArchiveFilterValues from "../constants/isArchiveFilterValues";

const initialState = {
    title: "",
    description: "",
    items: [],
    colors: [],
    filter: {
        colors: [],
        text: "",
        isArchived: isArchiveFilterValues.ALL,
    }
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
        case ADD_REMOVE_FIRST_FILTER_COLOR:
            if (state.filter.colors.includes(action.value)) {
                const filter = Object.assign({}, state.filter, {
                    colors: [
                        ...state.filter.colors.slice(0, state.filter.colors.indexOf(action.value)),
                        ...state.filter.colors.slice(state.filter.colors.indexOf(action.value) + 1)

                    ]
                });
                return Object.assign({}, state, { filter });
            } else {
                const filter = Object.assign({}, state.filter, {
                    colors: [
                        ...state.filter.colors,
                        action.value
                    ]
                });
                return Object.assign({}, state, { filter });
            }
        case SET_FIRST_FILTER_ARCHIVE: {
            const filter = Object.assign({}, state.filter, { isArchived: action.value });
            return Object.assign({}, state, { filter });
        }
        case SET_FIRST_FILTER_TEXT: {
            const filter = Object.assign({}, state.filter, { text: action.value });
            return Object.assign({}, state, { filter });
        }
        default:
            return state;
    }
};