import { createContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const CountryDishContext = createContext();

const CountryDishProvider = ({ children }) => {
  const [countryDishes, setCountryDishes] = useState([]);
  const [countries, setCountries] = useState([]);

  const countryClick = (e) => {
    const fetchCountryDishes = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${e.target.value}`
        );
        setCountryDishes(response.data.meals);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountryDishes();
  };

  return (
    <CountryDishContext.Provider
      value={{ countryDishes, countryClick, countries, setCountries }}
    >
      {children}
    </CountryDishContext.Provider>
  );
};

CountryDishProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CountryDishProvider, CountryDishContext };
