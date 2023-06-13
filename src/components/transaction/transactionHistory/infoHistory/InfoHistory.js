import PropTypes from "prop-types";


const InfoHistory = ({ type, amount, currency }) => {
    return (
        <tbody className="info-hstr-container">
            <tr className="line-bg">
                <td className="text info-tablet">{type}</td>
                <td className="info-tablet">{amount}</td>
                <td className="info-tablet">{currency}</td>
            </tr>
        </tbody>
    );
};

InfoHistory.protoTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}

export default InfoHistory;