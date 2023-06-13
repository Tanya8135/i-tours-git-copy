import PropTypes from 'prop-types';

const StatisticsItem = ({ label, percentage }) => {
    return (
        <li className="stat-item">
            <span className="stat-label">{label}</span>
            <span className="stat-percentage">{percentage}%</span>
        </li>
    );
};

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatisticsItem;