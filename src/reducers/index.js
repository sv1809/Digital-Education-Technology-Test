import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import sideMenu from "./sideMenu";

export default combineReducers({
    router: routerReducer,
    sideMenu
});