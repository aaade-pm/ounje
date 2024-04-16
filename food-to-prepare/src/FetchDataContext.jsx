import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const FetchDataContext = createContext();

const FetchDataProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchDisplay, setSearchDisplay] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = () => {
    setShowResults(true);
    searchResults.find((result) => result.strMeal.includes(searchValue));
    setSearchDisplay(searchResults);
    setSearchValue("");
    console.log(searchValue);
    console.log(searchResults);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
      );
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
