import React from "react";
import { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import Filter from "./Filter";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("All");

  // Load from localStorage
  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (savedExpenses) {
      setExpenses(savedExpenses);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const filteredExpenses =
    category === "All"
      ? expenses
      : expenses.filter(expense => expense.category === category);

  const totalAmount = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">
          Expense Tracker
        </h1>

        <ExpenseForm setExpenses={setExpenses} />
        <Filter setCategory={setCategory} />

        <p className="text-right font-semibold mt-4">
          Total: ${totalAmount}
        </p>

        <ExpenseList
          expenses={filteredExpenses}
          setExpenses={setExpenses}
        />
      </div>
    </div>
  );
}
