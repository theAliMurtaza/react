import ExpenseItem from "./ExpenseItem";
export default function ExpenseList({ expenses, setExpenses }) {
    if (!expenses.length)
    return <p className="text-center mt-4">No expenses yet</p>;

  return (
    <div className="mt-4 space-y-2">
      {expenses.map(exp => (
        <expenseItem
          key={exp.id}
          expenses={exp}
          setExpenses={setExpenses}
        />
      ))}
    </div>
  );
}