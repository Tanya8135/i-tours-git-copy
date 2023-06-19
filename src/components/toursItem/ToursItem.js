// import user from "../tours-page/user.json";
import PropTypes from "prop-types";
import style from './TourItem.module.css';
import clsx from "clsx";
import { LIGHT } from "constans";
import { DARK } from "constans";

const ToursItem = ({ name, price, continent, description, theme }) => {
    return (
        <li
            className={clsx(style["tours-item"], {
                [style.dark]: theme === "LIGHT",
                [style.light]: theme === "DARK",
            })}
        >
            <p>Name: {name}</p>
            <p>Price: {price}$</p>
            <p>Continent: {continent}</p>
            {description && <p>Description: {description}</p>}
        </li>
    );
};

ToursItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    continent: PropTypes.string.isRequired,
    description: PropTypes.string,
    theme: PropTypes.string.isRequired,
}

export default ToursItem;