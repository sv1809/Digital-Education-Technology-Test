import PropTypes from "prop-types";

import * as styles from "./PageDescription.module.css";

const PageDescription = ({ description }) => (<div className={styles.description + " text-center"}
    dangerouslySetInnerHTML={{ __html: description }}>
</div>);

PageDescription.propTypes = {
    description: PropTypes.string,
};

export default PageDescription;