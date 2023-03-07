import React, { useEffect, useState } from "react";

import "../assets/styles/expenses.css";

import SingleExpense from "./SingleExpense";
import plus from "../assets/imgs/plus1.png";



import { useNavigate } from "react-router-dom";

const Expenses = ({ expenses = [], categories, selectedCategory,didUpdate,setDidUpdate }) => {
  console.log("expenses",expenses);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  const [plusBtn, setPlusBtn] = useState(false);
  const navigate = useNavigate();
  var total=0
  for(let i=0;i<expenses.length;i++){
    total+=Number(expenses[i].price)
  }

  useEffect(() => {
    if (selectedCategory.id === "0") {
      setFilteredExpenses(expenses);
    } else {
      let tempExpenses = expenses.filter(
        (item) => item.categoryId === selectedCategory.id
      );
      setFilteredExpenses(tempExpenses);
    }
  }, [selectedCategory,didUpdate]);
  return (
    <div>
      <div className="expensesContainer">
        <div className="expensesWrapper">
        <div className="totalPriceWrapper">
          <div>
          <p className="text"><span>Toplam: </span><span>{total} &#8378;</span></p>
          </div> 
          <div
           className="plusIcon"
          onMouseEnter={() => setPlusBtn(true)}
          onMouseLeave={() => setPlusBtn(false)}
          onClick={() => navigate("/add-expense")}
         >
          {plusBtn=== true ? (
            <img src={plus} />
          ) : (
            <img src={plus} />
          )}
        </div>
        </div>
        
          {filteredExpenses.length === 0 ? (
            <div className="emptyList">
              Aradığınız kategoride bir harcama yoktur
            </div>
          ) : (
            <>
              {filteredExpenses.map((expense) => (
                <SingleExpense
                  categories={categories}
                  key={expense.id}
                  expense={expense}
                  didUpdate={didUpdate}
                  setDidUpdate={setDidUpdate}
                />
              ))}
            </>
          )}
          
        
        </div>
       
      </div>
    </div>
  );
};

export default Expenses;