import React from "react";

import ecartPic from "../../src/image/ecartPic.PNG";
import followFrnd from "../../src/image/followFrnd.PNG";
import ImageThree from "../../src/image/image3.jpg";
import ImageFour from "../../src/image/image4.jpg";
import ImageFive from "../../src/image/image5.jpg";
import "./style.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "E-Cart",
    image: ecartPic,
    link: "https://ecart-react-vblm.vercel.app/",
  },
  {
    id: 3,
    name: "Follow Friend Page",
    link: "https://baxture-react-assignment-kalyani-kadam.vercel.app/",
    image: followFrnd,
  },
  {
    id: 2,
    name: "User Profiles Page",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "Todo App",
    image: ImageFour,

    link: "https://todoapp-six-liart.vercel.app/",
  },
  {
    id: 3,
    name: "E-cart design",
    image: ImageFive,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  function navigateToProject(url) {
    if (url) {
      window.open(url, "_blank");
    }
  }
  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => navigateToProject(item.link)}>
                      Visit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
