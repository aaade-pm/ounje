import { createContext, useState } from "react";
import PropTypes from "prop-types";

const SavedMealContext = createContext();

const SavedMealProvider = ({ children }) => {
  const [savedMeals, setSavedMeals] = useState([]);

  const saveMeal = (mealToAdd) => {
    if (savedMeals.some((meal) => meal.name === mealToAdd.name)) {
      console.log("Meal already saved");
      return;
    }

    setSavedMeals([...savedMeals, mealToAdd]);
  };
  return (
    <SavedMealContext.Provider value={{ saveMeal, savedMeals, setSavedMeals }}>
      {children}
    </SavedMealContext.Provider>
  );
};

SavedMealProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SavedMealProvider, SavedMealContext };
