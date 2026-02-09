import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";

export default function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  // 🔹 Debounce search (500ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // 🔹 Filter users by name OR email
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    user.email.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          User Dashboard
        </h1>

        <SearchBar search={search} setSearch={setSearch} />

        {loading ? (
          <p className="text-center mt-6">Loading users...</p>
        ) : filteredUsers.length === 0 ? (
          <p className="text-center mt-6 text-gray-600">
            No users found
          </p>
        ) : (
          <UsersList users={filteredUsers} onSelect={setSelectedUser} />
        )}

        {selectedUser && (
          <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
        )}
      </div>
    </div>
  );
}
