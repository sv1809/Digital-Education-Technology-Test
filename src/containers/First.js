import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import {
    getFirstData,
    changeIsArchived,
    addRemoveFIlterColor,
    setFilterArchive,
    setFilterText
} from "../actions/firstActions";
import Page from "../components/Page";
import Card from "./Card";
import * as isArchiveFilterValues from "../constants/isArchiveFilterValues";

class FirstConteiner extends React.Component {
    static propsTypes = {
        data: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            items: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string,
                isArchived: PropTypes.bool,
                color: PropTypes.string
            })),
            colors: PropTypes.arrayOf(PropTypes.string),
            filter: PropTypes.shape({
                colors: PropTypes.arrayOf(PropTypes.string),
                text: PropTypes.string,
                isArchived: PropTypes.string,
            })
        }),
        changeIsArchived: PropTypes.func,
        getData: PropTypes.func,
        addRemoveFilterColor: PropTypes.func,
        setFilterArchive: PropTypes.func,
        setFilterText: PropTypes.func,
    }

    componentWillMount = () => this.props.getData()

    render = () => {
        return (<div style={{ height: "100%" }}>
            <Route exact path={this.props.match.url} render={() => <Page
                data={this.props.data}
                match={this.props.match}
                changeIsArchived={this.props.changeIsArchived}
                addRemoveFilterColor={this.props.addRemoveFilterColor}
                setFilterArchive={this.props.setFilterArchive}
                setFilterText={this.props.setFilterText} />} />
            <Route path={`${this.props.match.url}/:id`} component={Card} />
        </div>);
    }
}

const mapStateToProps = state => {
    let data = Object.assign({}, state.first);
    if (data.filter.colors.length) {
        data.items = data.items.filter(item => data.filter.colors.includes(item.color));
    }
    switch (data.filter.isArchived) {
        case isArchiveFilterValues.ARCHIVED:
            data.items = data.items.filter(item => item.isArchived);
            break;
        case isArchiveFilterValues.NOT_ARCHIVED:
            data.items = data.items.filter(item => !item.isArchived);
            break;
    }
    if (data.filter.text.length) {
        data.items = data.items.filter(item => item.id.toString().includes(data.filter.text));
    }
    return {
        data,
    };
};

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getFirstData()),
    changeIsArchived: (id, value) => dispatch(changeIsArchived(id, value)),
    addRemoveFilterColor: value => dispatch(addRemoveFIlterColor(value)),
    setFilterArchive: value => dispatch(setFilterArchive(value)),
    setFilterText: value => dispatch(setFilterText(value)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FirstConteiner));