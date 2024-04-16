import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDish from "./pages/CountryDish";
import SearchByName from "./pages/SearchByName";
import CategoryDish from "./pages/CategoryDish";
import RandomDish from "./pages/RandomDish";
import { FetchDataProvider } from "./FetchDataContext";

function App() {
  return (
    <>
      <FetchDataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SearchByName />} />
            <Route path="/country-dish" element={<CountryDish />} />
            <Route path="/random-dish" element={<RandomDish />} />
            <Route path="/category-dish" element={<CategoryDish />} />
          </Routes>
        </Router>
      </FetchDataProvider>
    </>
  );
}

export default App;
