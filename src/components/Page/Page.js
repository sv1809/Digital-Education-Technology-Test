import PropTypes from "prop-types";

import PageDescription from "../PageDescription";
import Cards from "../Cards";
import CardsFilter from "../CardsFilter";

import * as styles from "./Page.module.css";

const Page = ({ data, match, changeIsArchived, addRemoveFilterColor, setFilterArchive, setFilterText }) => (<div className={styles.page}>
    <h1 className={styles.header + " text-center"}>{data.title}</h1>
    <PageDescription description={data.description} />
    <CardsFilter
        colors={data.colors}
        filter={data.filter}
        addRemoveFilterColor={addRemoveFilterColor}
        setFilterArchive={setFilterArchive}
        setFilterText={setFilterText} />
    <Cards cards={data.items} match={match} changeIsArchived={changeIsArchived} />
</div>);

Page.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            isArchived: PropTypes.bool,
            color: PropTypes.string
        })),
        colors: PropTypes.arrayOf(PropTypes.string),
        filter: PropTypes.shape({
            colors: PropTypes.arrayOf(PropTypes.string),
            text: PropTypes.string,
            isArchived: PropTypes.string,
        })
    }),
    changeIsArchived: PropTypes.func,
    addRemoveFilterColor: PropTypes.func,
    setFilterArchive: PropTypes.func,
    setFilterText: PropTypes.func,
};

export default Page;

