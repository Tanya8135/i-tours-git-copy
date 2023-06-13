import clsx from "clsx";

import ToursItem from "../toursItem";

import './ToursPage.scss';

import { LIGHT } from "constans";
import { DARK } from "constans";

const toursArray = [
  {
    id: 1,
    name: 'Portugalia',
    price: 3000,
    continent: 'Europe',
    description: 'Best tour for...'
  },
  {
    id: 2,
    name: 'Italy',
    price: 5000,
    continent: 'Europe',
    // description: 'Best tour adasdw for...'
  }

]

const ToursPage = ({ theme }) => {
  console.log(theme)
  return (
    // <div className={`tours-container ${theme === DARK ? DARK : LIGHT}`}>
    <div className={clsx('tours-container', {
      dark: theme === DARK,
      light: theme === LIGHT,
    })}>

      <h1 className="title-tour">Tours page</h1>

      <ul className="tours-list">
        {toursArray.map((tour) => (
          <ToursItem key={tour.id} {...tour} theme={theme} />
        ))}
      </ul>
    </div>
  );
};

export default ToursPage;