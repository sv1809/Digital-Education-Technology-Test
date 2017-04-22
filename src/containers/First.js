import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import { getFirstData } from "../actions/firstActions";
import Page from "../components/Page";

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
        })
    }

    componentWillMount = () => this.props.getData()

    render = () => {
        return (<div style={{ height: "100%" }}>
            <Route exact path={this.props.match.url} render={() => <Page data={this.props.data} match={this.props.match} />} />
        </div>);
    }
}

const mapStateToProps = state => ({
    data: state.first,
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getFirstData()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FirstConteiner));