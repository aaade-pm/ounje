import NavBar from "../components/NavBar";
import { useContext } from "react";
import { FetchDataContext } from "../FetchDataContext";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchByName = () => {
  const {
    handleChange,
    handleSearch,
    searchValue,
    searchDisplay,
    showResults,
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
            {searchDisplay.length > 0
              ? searchDisplay.map((result) => (
                  <div key={result.idMeal} className="search-results-content">
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
      </main>
    </>
  );
};

export default SearchByName;
