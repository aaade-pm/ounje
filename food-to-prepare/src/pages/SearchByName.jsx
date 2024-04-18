import NavBar from "../components/NavBar";
import { useContext } from "react";
import { FetchDataContext } from "../FetchDataContext";
import { FaMagnifyingGlass, FaYoutube } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const SearchByName = () => {
  const {
    handleChange,
    handleSearch,
    searchValue,
    searchDisplay,
    showResults,
    showModal,
    modalToggle,
    selectedResult,
    closeSearchResults,
  } = useContext(FetchDataContext);

  return (
    <>
      <main>
        <div className="search-text">
          <h1>
            Hi bestie! <br /> Do you have any food in mind?
          </h1>
          <p>Search for the recipe here 🔻</p>
        </div>
        <NavBar />

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a dish"
            aria-label="search for food"
            onChange={handleChange}
            value={searchValue}
          />

          <div className="search-icon" onClick={handleSearch}>
            <button>
              <FaMagnifyingGlass className="search" />
            </button>
          </div>
        </div>

        {showResults && (
          <div className="search-results">
            <div className="close-search">
              <MdOutlineClose onClick={closeSearchResults} />
            </div>

            {searchDisplay.length > 0
              ? searchDisplay.map((result) => (
                  <div
                    key={result.idMeal}
                    className="search-results-content"
                    onClick={() => modalToggle(result)}
                  >
                    <div className="search-results-img">
                      <img src={result.strMealThumb} alt="" />
                    </div>

                    <div className="search-results-text">
                      <h3>{result.strMeal}</h3>
                      <p>Nationality: {result.strArea}</p>
                      <p>Category: {result.strCategory}</p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        )}

        {showResults && showModal && selectedResult && (
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
        )}
      </main>
    </>
  );
};

export default SearchByName;
