import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import { getFirstData, changeIsArchive } from "../actions/firstActions";
import Page from "../components/Page";
import Card from "./Card";

class FirstConteiner extends React.Component {
    static propsTypes = {
        data: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            items: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string,
                isArchive: PropTypes.bool,
                color: PropTypes.string
            }))
        }),
        changeIsArchive: PropTypes.func,
        getData: PropTypes.func
    }

    componentWillMount = () => this.props.getData()

    render = () => {
        return (<div style={{ height: "100%" }}>
            <Route exact path={this.props.match.url} render={() => <Page
                data={this.props.data}
                match={this.props.match}
                changeIsArchive={this.props.changeIsArchive} />} />
            <Route path={`${this.props.match.url}/:id`} component={Card} />
        </div>);
    }
}

const mapStateToProps = state => ({
    data: state.first,
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getFirstData()),
    changeIsArchive: (id, value) => dispatch(changeIsArchive(id, value)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FirstConteiner));