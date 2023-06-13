import StatisticsItem from "../statisticsItem";
import data from '../data/data.json';
import PropTypes from "prop-types";

const Statistics = () => {
    return (
        <div className="stat-container">
            <section className="stat-section">
                <h2 className="stat-title">Upload stats</h2>
                <ul className="stat-list">
                    {data.map((list) => (
                        <StatisticsItem key={list.id} {...list} />
                    ))
                    }
                </ul>
            </section>
        </div>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
}

export default Statistics;