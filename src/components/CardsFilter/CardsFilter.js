import PropTypes from "prop-types";

import * as isArchiveFilterValues from "../../constants/isArchiveFilterValues";
import * as styles from "./CardsFilter.module.css";

const CardsFilter = ({ filter, addRemoveFilterColor, setFilterArchive, setFilterText, colors }) => (<div className={styles.filter}>
    <h5>Фильтр</h5>
    <div className={styles.section}>
        {
            colors.map(color => (<div
                key={color}
                className={styles.color + (filter.colors.includes(color) ? " " + styles.colorActive : "")}
                style={{ backgroundColor: color }}
                onClick={() => addRemoveFilterColor(color)} />))
        }
    </div>
    <div className={styles.section}>
        <span className={styles.cardNumberText}>Номер карточки</span>
        <input value={filter.text} onInput={e => setFilterText(e.target.value)} type="number" />
    </div>
    <div className={styles.section}>
        <label className={styles.isArchivedLabel}>
            <input
                className={styles.radio}
                type="radio"
                name="isArchived"
                value={isArchiveFilterValues.ALL}
                checked={filter.isArchived === isArchiveFilterValues.ALL}
                onChange={() => setFilterArchive(isArchiveFilterValues.ALL)} />
            Все
        </label>
        <label className={styles.isArchivedLabel}>
            <input
                className={styles.radio}
                type="radio"
                name="isArchived"
                value={isArchiveFilterValues.ARCHIVED}
                checked={filter.isArchived === isArchiveFilterValues.ARCHIVED}
                onChange={() => setFilterArchive(isArchiveFilterValues.ARCHIVED)} />
            Архивные
        </label>
        <label className={styles.isArchivedLabel}>
            <input
                className={styles.radio}
                type="radio"
                name="isArchived"
                value={isArchiveFilterValues.NOT_ARCHIVED}
                checked={filter.isArchived === isArchiveFilterValues.NOT_ARCHIVED}
                onChange={() => setFilterArchive(isArchiveFilterValues.NOT_ARCHIVED)} />
            Не архивные
        </label>
    </div>
</div>);

CardsFilter.propTypes = {
    filter: PropTypes.shape({
        colors: PropTypes.arrayOf(PropTypes.string),
        text: PropTypes.string,
        isArchived: PropTypes.string,
    }),
    colors: PropTypes.arrayOf(PropTypes.string),
    addRemoveFilterColor: PropTypes.func,
    setFilterArchive: PropTypes.func,
    setFilterText: PropTypes.func,
};

export default CardsFilter;

