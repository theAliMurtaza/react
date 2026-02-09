export default function Filter({setCategory}){
    return (
    <select
      onChange={e => setCategory(e.target.value)}
      className="w-full border rounded-md p-2 mt-4"
    >
      <option>All</option>
      <option>Food</option>
      <option>Travel</option>
      <option>Shopping</option>
    </select>
  );
}