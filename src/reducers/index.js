import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import sideMenu from "./sideMenu";
import first from "./first";

export default combineReducers({
    router: routerReducer,
    sideMenu,
    first,
});