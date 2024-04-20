import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDish from "./pages/CountryDish";
import SearchByName from "./pages/SearchByName";
import CategoryDish from "./pages/CategoryDish";
import RandomDish from "./pages/RandomDish";
import { FetchDataProvider } from "./contexts/FetchDataContext";
import { SavedMealProvider } from "./contexts/SavedMealContext";
import { SearchProvider } from "./contexts/SearchContext";
import { ModalProvider } from "./contexts/ModalContext";
import { RandomMealProvider } from "./contexts/RandomMealContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { CountryDishProvider } from "./contexts/CountryDishContext";
import { MobileNavProvider } from "./contexts/MobileNavContext";

function App() {
  return (
    <>
      <SearchProvider>
        <CategoriesProvider>
          <CountryDishProvider>
            <FetchDataProvider>
              <SavedMealProvider>
                <MobileNavProvider>
                  <ModalProvider>
                    <RandomMealProvider>
                      <Router>
                        <Routes>
                          <Route path="/" element={<SearchByName />} />
                          <Route
                            path="/country-dish"
                            element={<CountryDish />}
                          />
                          <Route path="/random-dish" element={<RandomDish />} />
                          <Route
                            path="/category-dish"
                            element={<CategoryDish />}
                          />
                        </Routes>
                      </Router>
                    </RandomMealProvider>
                  </ModalProvider>
                </MobileNavProvider>
              </SavedMealProvider>
            </FetchDataProvider>
          </CountryDishProvider>
        </CategoriesProvider>
      </SearchProvider>
    </>
  );
}

export default App;
