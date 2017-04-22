import PropTypes from "prop-types";

import * as styles from "./Card.module.css";

const Card = ({ card }) => (<div className={styles.cardWrapper}>
    <div className={styles.card}>
        <div className={styles.cardColor} style={{ backgroundColor: card.color }}></div>
        <div className={styles.cardData}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            {card.isArchived && <span className={styles.cardArchive}>Архивная</span>}
        </div>
    </div>
</div>);

Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        isArchived: PropTypes.bool,
        color: PropTypes.string
    })
};

export default Card;

