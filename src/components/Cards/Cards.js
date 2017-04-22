import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import * as styles from "./Cards.module.css";

const Cards = ({ cards, match, changeIsArchived }) => (<div className={styles.cards}>
    {
        cards.map(card => (<NavLink
            key={card.id}
            to={`${match.url}/${card.id}`}
            className={styles.card + " col-lg-2 col-md-3 col-sm-5 col-xs-10"}>
            <div className={styles.cardColor} style={{ backgroundColor: card.color }}></div>
            <div className={styles.cardData}>
                <div className={styles.cardTitle}>{card.title}</div>
                <label className={styles.isArchiveSwitcher} onClick={e => e.stopPropagation()}>
                    <input type="checkbox" checked={card.isArchived} onChange={e => changeIsArchived(card.id, e.target.checked)} />
                    Арихвная
                    </label>
            </div>
        </NavLink>))
    }
</div>);

Cards.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        isArchived: PropTypes.bool,
        color: PropTypes.string
    })),
    changeIsArchived: PropTypes.func,
};

export default Cards;

