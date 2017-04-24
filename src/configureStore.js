import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { routerMiddleware } from "react-router-redux";

import reducers from "./reducers";
import history from "./history";

const isProd = process.env.NODE_ENV === "production";

const configureStore = preloadedState => {
    let middleware;
    if (isProd) {
        middleware = applyMiddleware(thunk, routerMiddleware(history));
    } else {
        if (window.__REDUX_DEVTOOLS_EXTENSION__) {
            middleware = compose(
                applyMiddleware(
                    thunk,
                    createLogger(),
                    routerMiddleware(history)
                ),
                window.__REDUX_DEVTOOLS_EXTENSION__()
            );
        } else {
            middleware = compose(
                applyMiddleware(
                    thunk,
                    createLogger(),
                    routerMiddleware(history)
                )
            );
        }
    }
    const store = createStore(
        reducers,
        preloadedState,
        middleware,
    );
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("./reducers", () => {
            const nextRootReducer = require("./reducers");

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

export default configureStore;