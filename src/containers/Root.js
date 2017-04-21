import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import PropTypes from "prop-types";

import NotFound from "../components/NotFound";
import About from "../components/About";
import SideMenu from "../containers/SideMenu";
// import App from "./containers/App";
import history from "../history";

const Root = ({ store }) => (<Provider store={store}>
    <ConnectedRouter history={history}>
        <div style={{ height: "100%" }}>
            <SideMenu />
            <div className="col-lg-10 col-md-9 col-sm-8 col-xs-8">
                <Switch>
                    <Route path="/" exact component={About} />
                    <Route path="/1" component={About} />
                    <Route path="/2" component={About} />
                    <Route path="/3" component={About} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </div>
    </ConnectedRouter>
</Provider >);

Root.PropTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;