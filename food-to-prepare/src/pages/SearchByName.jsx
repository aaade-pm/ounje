import NavBar from "../components/NavBar";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import Modal from "../components/Modal";
import { SearchContext } from "../contexts/SearchContext";
import { motion } from "framer-motion";

const SearchByName = () => {
  const { showModal, modalToggle, selectedResult } = useContext(ModalContext);

  const {
    handleChange,
    handleSearch,
    searchValue,
    searchDisplay,
    showResults,
    closeSearchResults,
  } = useContext(SearchContext);

  return (
    <>
      <main>
        <NavBar />

        <motion.div
          className="search-text"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1],
            scale: [0.2, 1],
            transition: { duration: 1 },
          }}
        >
          <h1>
            Hi bestie! <br /> Do you have any food in mind?
          </h1>
          <p>Search for the recipe here 🔻</p>
        </motion.div>

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

        {showResults && showModal && selectedResult && <Modal />}
      </main>
    </>
  );
};

export default SearchByName;
