export default function ExpenseItem({expenses , setExpenses}) {
    const handleDelete = (id) =>{
        setExpenses (expense => expense.filter (expense => expense.id != id))
    }
    return (
        <div className="flex justify-between items-center bg-slate-50 p-3 rounded-md">
      <div>
        <p className="font-semibold">{expenses.title}</p>
        <p className="text-sm text-slate-500">
          {expenses.category} · ${expenses.amount}
        </p>
      </div>
      <button
        onClick={deleteHandler}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
    )
}