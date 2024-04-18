import { MdOutlineClose } from "react-icons/md";
import { FetchDataContext } from "../FetchDataContext";
import { FaYoutube } from "react-icons/fa";
import { useContext } from "react";

const Modal = () => {
  const { modalToggle, selectedResult } = useContext(FetchDataContext);
  return (
    <div className="food-modal-container">
      <div className="close-modal" onClick={modalToggle}>
        <MdOutlineClose />
      </div>

      <div className="food-modal" key={selectedResult.idMeal}>
        <div className="food-image">
          <img src={selectedResult.strMealThumb} alt="" />
        </div>
        <div className="food-details">
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
  );
};

export default Modal;
