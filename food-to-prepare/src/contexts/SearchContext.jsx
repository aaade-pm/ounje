import { createContext, useState } from "react";
import PropTypes from "prop-types";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchDisplay, setSearchDisplay] = useState([]);
  const [showResults, setShowResults] = useState(false);

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

  return (
    <SearchContext.Provider
      value={{
        handleChange,
        handleSearch,
        closeSearchResults,
        searchValue,
        searchDisplay,
        showResults,
        setSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SearchProvider, SearchContext };
