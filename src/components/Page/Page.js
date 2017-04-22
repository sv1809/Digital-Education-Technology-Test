import PropTypes from "prop-types";

import PageDescription from "../PageDescription";
import Cards from "../Cards";
import * as styles from "./Page.module.css";

const Page = ({ data, match }) => {
    console.log(match);
    return (<div className={styles.page}>
        <h1 className={styles.header + " text-center"}>{data.title}</h1>
        <PageDescription description={data.description} />
        <Cards cards={data.items} match={match} />
    </div>);
};

Page.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            isArchive: PropTypes.bool,
            color: PropTypes.string
        }))
    })
};

export default Page;

