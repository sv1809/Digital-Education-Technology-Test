import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import * as styles from "./Cards.module.css";

const Cards = ({ cards, match }) => (<div className={styles.cards}>
    {
        cards.map(card => (<NavLink
            key={card.id}
            to={`${match.url}/${card.id}`}
            className={styles.card}
            style={{ backgroundColor: card.color }}>
            <span>{card.title}</span>
        </NavLink>))
    }
</div>);

Cards.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        isArchive: PropTypes.bool,
        color: PropTypes.string
    }))
};

export default Cards;

