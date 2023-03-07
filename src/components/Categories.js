import React from "react";

import "../assets/styles/categories.css";

import {Link} from "react-router-dom"

// import { upperFirstLetter } from "../utils/functions";

const Categories= ({
  categories = [],
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="categoriesContainer">
      <div className="categoriesWrapper">
        <p
          onClick={() => setSelectedCategory({ id: "0", name: "Hepsi" })}
          className={`categoryItem ${
            selectedCategory.id === "0" ? "categoryItemActive" : ""
          }`}>
          Hepsi
        </p>
        
        {categories.map((category) => (
          <p
            key={category.id}
            onClick={() => setSelectedCategory(category)}
            className={`categoryItem ${
              selectedCategory.id === category.id ? "categoryItemActive" : ""
            }`}>
            {(category.name)}
          </p>
        ))}
        <div className="categoryOperationLinkWrapper">
            <Link to={"/category-operations"}>Kategori İşlemleri &rarr;</Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;