export default function UserCard({ user, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
    >
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-500">{user.company.name}</p>
    </div>
  );
}
