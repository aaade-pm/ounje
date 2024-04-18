import NavBar from "../components/NavBar";
import { useContext } from "react";
import { FetchDataContext } from "../FetchDataContext";

const CategoryDish = () => {
  const { categories } = useContext(FetchDataContext);
  return (
    <div>
      <NavBar />

      <div className="category-dish">
        <h1>THE DIFFERENT CATEGORIES OF DISHES</h1>

        {categories.map((category) => (
          <div key={category.idCategory} className="category">
            <div className="category-image">
              <img src={category.strCategoryThumb} alt="" />
            </div>

            <div className="category-details">
              <h2>{category.strCategory}</h2>
              <p>{category.strCategoryDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDish;
