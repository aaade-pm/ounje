import { createContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const RandomMealContext = createContext();

const RandomMealProvider = ({ children }) => {
  const [randomResult, setRandomResult] = useState(null);
  const [showRandom, setShowRandom] = useState(false);

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

  return (
    <RandomMealContext.Provider
      value={{ randomResult, fetchRandomMeal, showRandom }}
    >
      {children}
    </RandomMealContext.Provider>
  );
};

RandomMealProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RandomMealProvider, RandomMealContext };
