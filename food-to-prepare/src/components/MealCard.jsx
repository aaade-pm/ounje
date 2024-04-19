import { useContext } from "react";
import { FetchDataContext } from "../contexts/FetchDataContext";
import { FaYoutube } from "react-icons/fa";
import Modal from "./Modal";

const MealCard = () => {
  const { randomResult, modalToggle, showModal, selectedResult } =
    useContext(FetchDataContext);

  const result = randomResult[0];
  return (
    <div>
      <div className="meal-card" onClick={() => modalToggle(result)}>
        <div className="meal-image">
          <img src={result.strMealThumb} alt="" />
        </div>
        <div className="meal-details">
          <h3>{result.strMeal}</h3>
          <h3>{result.strCategory}</h3>
          <h3>{result.strArea}</h3>
          <p className="watch-video">
            <span className="youtube-icon">
              <FaYoutube />
            </span>
            <a href={result.strYoutube}> Watch the preparation</a>
          </p>
        </div>
      </div>

      {showModal && selectedResult && <Modal />}
    </div>
  );
};

export default MealCard;
