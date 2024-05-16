import { MdOutlineClose } from "react-icons/md";
import { ModalContext } from "../contexts/ModalContext";
import { FaYoutube } from "react-icons/fa";
import { useContext } from "react";
import SavedMeal from "./SavedMeal";
import { SavedMealContext } from "../contexts/SavedMealContext";

const Modal = () => {
  const { modalToggle, selectedResult } = useContext(ModalContext);
  const { saveMeal } = useContext(SavedMealContext);
  return (
    <>
      <div className="food-modal-container">
        <div className="close-modal" onClick={modalToggle}>
          <MdOutlineClose />
        </div>

        <div className="food-modal" key={selectedResult.idMeal}>
          <div className="food-image">
            <img src={selectedResult.strMealThumb} alt="" />
          </div>
          <div className="food-details">
            <SavedMeal
              name={selectedResult.strMeal}
              category={selectedResult.strCategory}
              area={selectedResult.strArea}
              image={selectedResult.strMealThumb}
              saveMeal={saveMeal}
            />
            <h3>{selectedResult.strMeal}</h3>
            <h3>{selectedResult.strCategory}</h3>
            <h3>{selectedResult.strArea}</h3>
            <p>{selectedResult.strInstructions}</p>
            <p className="watch-video">
              <span className="youtube-icon">
                <FaYoutube />
              </span>
              <a href={selectedResult.strYoutube}> Watch the preparation</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
