export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      value={search}
      onChange={e => setSearch(e.target.value)}
      className="w-full p-3 border rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-green-400"
    />
  );
}
