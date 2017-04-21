import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import PropTypes from "prop-types";

import NotFound from "../components/NotFound";
import About from "../components/About";
// import App from "./containers/App";
import history from "../history";

const Root = ({ store }) => (<Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
            <Route path="/" exact component={About} />
            <Route component={NotFound} />
        </Switch>
    </ConnectedRouter>
</Provider >);

Root.PropTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;