import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import EditExpenses from "./pages/EditExpenses";
import CategoryOperations from "./pages/CategoryOperations";
import AddCategory from "./pages/AddCategory";
import AddExpenses from "./pages/AddExpenses";
import EditCategory from "./pages/EditCategory";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-expense" element={<AddExpenses />} />
          <Route path="/edit-expense/:expenseId" element={<EditExpenses />} />
          <Route path="/category-operations" element={<CategoryOperations />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/edit-category/:categoryId" element={<EditCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;