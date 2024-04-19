import { createContext, useEffect, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { SearchContext } from "./SearchContext";
import { CountryDishContext } from "./CountryDishContext";
import { CategoriesContext } from "./CategoriesContext";

const FetchDataContext = createContext();

const FetchDataProvider = ({ children }) => {
  const { setCategories } = useContext(CategoriesContext);
  const { setCountries } = useContext(CountryDishContext);
  const { setSearchResults, searchValue } = useContext(SearchContext);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
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
      } catch (error) {
        console.error(error);
      }
    };
    fetchSearchResults();
  }, [searchValue, setSearchResults, setCountries, setCategories]);
  return (
    <FetchDataContext.Provider value={{}}>{children}</FetchDataContext.Provider>
  );
};

FetchDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FetchDataContext, FetchDataProvider };
