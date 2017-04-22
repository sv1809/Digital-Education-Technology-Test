import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { getFirstData } from "../actions/firstActions";
import Card from "../components/Card";
import Loading from "../components/Loading";

class CardConteiner extends React.Component {
    static propsTypes = {
        card: PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            isArchived: PropTypes.bool,
            color: PropTypes.string
        })
    }

    componentWillMount = () => {
        if (this.props.card == null) {
            this.props.getData();
        }
    }

    render = () => {
        return this.props.card != null ? <Card card={this.props.card} /> : <Loading />;
    }
}

const mapStateToProps = (state, props) => ({
    card: state.first.items.find(item => item.id.toString() === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getFirstData()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardConteiner));