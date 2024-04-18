import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const FetchDataContext = createContext();

const FetchDataProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchDisplay, setSearchDisplay] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);
  const [randomResult, setRandomResult] = useState(null);
  const [showRandom, setShowRandom] = useState(false);
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const [countryDishes, setCountryDishes] = useState([]);

  const countryClick = (e) => {
    const fetchCountryDishes = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${e.target.value}`
      );
      setCountryDishes(response.data.meals);
    };
    fetchCountryDishes();
  };

  const modalToggle = (result) => {
    setSelectedResult(result);
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const closeSearchResults = () => {
    setShowResults(false);
  };

  const handleSearch = () => {
    setShowResults(true);
    searchResults.find((result) => result.strMeal.includes(searchValue));
    setSearchDisplay(searchResults);
    setSearchValue("");
  };

  const fetchRandomMeal = async () => {
    try {
      const randomResponse = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      setRandomResult(randomResponse.data.meals);
      setShowRandom(true);
    } catch (error) {
      console.error("Error fetching random meal:", error);
    }
    console.log(randomResult);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
      );
      const categoriesResponse = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );

      const countryNames = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
      );

      setCountries(countryNames.data.meals);
      setCategories(categoriesResponse.data.categories);
      setSearchResults(response.data.meals);
    };
    fetchSearchResults();
  }, [searchValue]);
  return (
    <FetchDataContext.Provider
      value={{
        handleChange,
        handleSearch,
        searchValue,
        searchDisplay,
        searchResults,
        showResults,
        showModal,
        modalToggle,
        selectedResult,
        closeSearchResults,
        randomResult,
        fetchRandomMeal,
        showRandom,
        categories,
        countries,
        countryClick,
        countryDishes,
      }}
    >
      {children}
    </FetchDataContext.Provider>
  );
};

FetchDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FetchDataContext, FetchDataProvider };
