import { useState } from "react";   
export default function ExpenseForm({setExpenses}) {
    const [title , setTitle] = useState("");
    const [amount , setAmount] = useState("");
    const [category , setCategory] = useState("Food");
    const handleSubmit = (e) => {
        e.preventDefault();
        setExpenses(expnses => [...expenses , {id: Date.now() , title , amount: parseFloat(amount) , category}])
        setTitle("");
        setAmount("");
        setCategory("Food");
    }
    return(
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="w-full border rounded-md p-3">
                <input type="text" placeholder="Enter the expense" value={title} onChange={e=> setTitle(e.target.value)} required />
                <input type="number" placeholder="Enter the amount" value={amount} onChange={e=> setAmount(e.target.value)} required className="ml-4" />
                <select value={category} onChange={e=> setCategory(e.target.value)} className="ml-4">
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="shopping">Shopping</option>
                    <option value="other">Other</option>
                </select>
                <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-green-700 cursor-pointer ">Add Expense</button>
            </div>
        </form>
    )
}