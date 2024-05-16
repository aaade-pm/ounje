import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useState } from "react";

const SavedMeal = ({ name, category, area, image, saveMeal }) => {
  const [ifSaved, setIfSaved] = useState(false);

  const handleSavedMeal = () => {
    const mealToAdd = {
      name,
      category,
      area,
      image,
    };
    saveMeal(mealToAdd);
    setIfSaved(true);
  };
  return (
    <div>
      {ifSaved ? (
        <FaHeart className="red-heart" onClick={handleSavedMeal} />
      ) : (
        <FaRegHeart className="heart" onClick={handleSavedMeal} />
      )}
    </div>
  );
};

SavedMeal.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  area: PropTypes.string,
  image: PropTypes.string,
  saveMeal: PropTypes.func,
};

const MemoizedSavedMeal = React.memo(SavedMeal);

export default MemoizedSavedMeal;
