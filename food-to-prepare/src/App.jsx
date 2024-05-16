import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FetchDataProvider } from "./contexts/FetchDataContext";
import { SavedMealProvider } from "./contexts/SavedMealContext";
import { SearchProvider } from "./contexts/SearchContext";
import { ModalProvider } from "./contexts/ModalContext";
import { RandomMealProvider } from "./contexts/RandomMealContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { CountryDishProvider } from "./contexts/CountryDishContext";
import { MobileNavProvider } from "./contexts/MobileNavContext";
import "./App.css";

const CountryDish = React.lazy(() => import("./pages/CountryDish"));
const SearchByName = React.lazy(() => import("./pages/SearchByName"));
const CategoryDish = React.lazy(() => import("./pages/CategoryDish"));
const RandomDish = React.lazy(() => import("./pages/RandomDish"));

function App() {
  return (
    <SearchProvider>
      <CategoriesProvider>
        <CountryDishProvider>
          <FetchDataProvider>
            <SavedMealProvider>
              <MobileNavProvider>
                <ModalProvider>
                  <RandomMealProvider>
                    <Router>
                      <Suspense fallback={<></>}>
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
                      </Suspense>
                    </Router>
                  </RandomMealProvider>
                </ModalProvider>
              </MobileNavProvider>
            </SavedMealProvider>
          </FetchDataProvider>
        </CountryDishProvider>
      </CategoriesProvider>
    </SearchProvider>
  );
}

export default App;
