import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { getMenuItems } from "../actions/sideMenuActions";
import SideMenu from "../components/SideMenu";

class SideMenuConteiner extends React.Component {
    static propsTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            test: PropTypes.string,
            link: PropTypes.string,
        }))
    }

    componentWillMount = () => this.props.getMenuItems()

    render = () => {
        return <SideMenu isVisible={this.props.isVisible} items={this.props.items} showHide={this.props.showHide} />;
    }
}

const mapStateToProps = state => ({
    items: state.sideMenu.items,
});

const mapDispatchToProps = dispatch => ({
    getMenuItems: () => dispatch(getMenuItems()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideMenuConteiner));