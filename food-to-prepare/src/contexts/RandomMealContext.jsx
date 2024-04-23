import { createContext, useCallback, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const RandomMealContext = createContext();

const RandomMealProvider = ({ children }) => {
  const [randomResult, setRandomResult] = useState(null);
  const [showRandom, setShowRandom] = useState(false);

  const fetchRandomMeal = useCallback(async () => {
    try {
      const randomResponse = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      setRandomResult(randomResponse.data.meals);
      setShowRandom(true);
    } catch (error) {
      console.error("Error fetching random meal:", error);
    }
    randomResult;
  }, [randomResult]);

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
