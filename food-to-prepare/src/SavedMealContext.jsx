import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const SavedMealContext = createContext();

const SavedMealProvider = ({ children }) => {
  const [savedMeals, setSavedMeals] = useState([]);

  useEffect(() => {
    const savedMealsData = localStorage.getItem("savedMeals");
    if (savedMealsData) {
      setSavedMeals(JSON.parse(savedMealsData));
    }
  }, []);

  const saveMeal = (mealToAdd) => {
    if (savedMeals.some((meal) => meal.name === mealToAdd.name)) {
      console.log("Meal already saved");
      return;
    }

    setSavedMeals([...savedMeals, mealToAdd]);
    localStorage.setItem(
      "savedMeals",
      JSON.stringify([...savedMeals, mealToAdd])
    );
  };

  const removeMeal = (mealToRemove) => {
    const updatedMeals = savedMeals.filter(
      (meal) => meal.name !== mealToRemove.name
    );
    setSavedMeals(updatedMeals);
    localStorage.setItem("savedMeals", JSON.stringify(updatedMeals));
    console.log("remove meal");
  };
  return (
    <SavedMealContext.Provider
      value={{ saveMeal, savedMeals, setSavedMeals, removeMeal }}
    >
      {children}
    </SavedMealContext.Provider>
  );
};

SavedMealProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SavedMealProvider, SavedMealContext };
