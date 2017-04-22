import PropTypes from "prop-types";

import * as styles from "./Cards.module.css";

const Card = ({ card }) => (<div>
    
</div>);

Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        isArchive: PropTypes.bool,
        color: PropTypes.string
    })
};

export default Card;

