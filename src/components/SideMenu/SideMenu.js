import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import * as styles from "./SideMenu.module.css";

const SideMenu = ({ items }) => (<div className={"col-lg-2 col-md-3 col-sm-4 col-xs-4 " + styles.menu}>
    {
        items.map(item => (<NavLink
            key={item.text}
            to={item.link}
            activeClassName={styles.itemActive}
            className={styles.item}>
            {item.text}
        </NavLink>))
    }
</div>);

SideMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        test: PropTypes.string,
        link: PropTypes.string,
    }))
};

export default SideMenu;