import clsx from "clsx";

import ToursItem from "../toursItem";

import "./ToursPage.scss";

import { LIGHT } from "constans";
import { DARK } from "constans";

const toursArray = [
  {
    id: 1,
    name: "Portugalia",
    price: 3000,
    continent: "Europe",
    description: "Best tour for...",
  },
  {
    id: 2,
    name: "Italy",
    price: 5000,
    continent: "Europe",
    // description: 'Best tour adasdw for...'
  },
];

const ToursPage = ({ theme }) => {
  // console.log(theme)

  const handleChangeQuery = (event) => {
    console.log("work", event.target.value);
  };
  return (
    // <div className={`tours-container ${theme === DARK ? DARK : LIGHT}`}>
    <div
      className={clsx("tours-container", {
        dark: theme === DARK,
        light: theme === LIGHT,
      })}
    >
      <h1 className="title-tour">Tours page</h1>

      <div className="tours-container__controlls">
        {/* не контрольованний елемент (не зберігається в state) */}
        <input
          type="text"
          placeholder="search..."
          onChange={handleChangeQuery}
        />

        <button onClick={() => console.log("work")}>Get inpust value</button>
        {/* контрольованний елемент -- зберігається обов'язково в state
        Завдяки цьому він і переписується, тобто оновлюючі дані в state */}
      </div>

      <ul className="tours-list">
        {toursArray.map((tour) => (
          <ToursItem key={tour.id} {...tour} theme={theme} />
        ))}
      </ul>
    </div>
  );
};

export default ToursPage;
