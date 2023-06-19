import { Component } from "react";
// import { nanoid } from "nanoid";
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
    name: "Ukraine",
    price: 5000,
    continent: "Europe",
    // description: 'Best tour adasdw for...'
  },
  {
    id: 3,
    name: "Spain",
    price: 4000,
    continent: "Europe",
    // description: 'Best tour adasdw for...'
  },
];

class ToursPage extends Component {
  // робимо Контрольованний елемент
  state = {
    query: "",
    items: toursArray,
  };

  // відбувається ререндер
  handleChangeQuery = (e) => {
    // console.log(e.target.value);
    this.setState({ query: e.target.value });
  };

  // handleFilterQuery = () => {
  //   this.setState((prevState) => {
  //     const items = prevState.items.filter((el) =>
  //       el.name.toLowerCase().includes(prevState.query.toLowerCase())
  //     );
  //     return {
  //       items,
  //     };
  //   });
  // };

  render() {
    // const handleChangeQuery = (event) => {
    //   console.log("work", event.target.value);
    // };

    const { theme } = this.props;
    const { query } = this.state;
    // const { query, items } = this.state;

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
          {/* Неконтрольованний елемент (не зберігається в state) */}
          {/* <input
            type="text"
            placeholder="search..."
            onChange={handleChangeQuery}
          /> */}

          {/* Контрольованний елемент */}
          <input
            type="text"
            placeholder="search..."
            value={query}
            onChange={this.handleChangeQuery}
            // onChange={handleChangeQuery}
          />
        </div>

        {/* toLowerCase - за допомогою цього методу регістер введенних 
літер перетворюється в малий і виводе фільтер, якщо назву написали
з маленької літери */}
        <ul className="tours-list">
          {toursArray
            .filter((el) => el.name.toLowerCase().includes(query.toLowerCase()))
            .map((tour) => (
              <ToursItem key={tour.id} {...tour} theme={theme} />
            ))}
        </ul>

        {/* Така фільтрація по кнопці працює лише по обновлению сторінки після кожного нажатия на кнопку */}
        {/* <button onClick={this.handleFilterQuery}>Search</button> */}

        {/* Фшлтрація по кнопці */}
        {/* <ul className="tours-list">
          {items.map((tour) => (
            <ToursItem key={tour.id} {...tour} theme={theme} />
          ))}
        </ul> */}
      </div>
    );
  }
}

export default ToursPage;
