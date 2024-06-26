import { createContext, useCallback, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const CountryDishContext = createContext();

const CountryDishProvider = ({ children }) => {
  const [countryDishes, setCountryDishes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const showCountryOptions = () => {
    setShowOptions(!showOptions);
    setCountryDishes([]);
  };

  const countryClick = useCallback((e) => {
    const fetchCountryDishes = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${e.target.value}`
        );
        setCountryDishes(response.data.meals);
        setShowOptions(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountryDishes();
  }, []);

  return (
    <CountryDishContext.Provider
      value={{
        countryDishes,
        countryClick,
        countries,
        setCountries,
        showCountryOptions,
        showOptions,
      }}
    >
      {children}
    </CountryDishContext.Provider>
  );
};

CountryDishProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CountryDishProvider, CountryDishContext };
