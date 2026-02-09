import UserCard from "./UserCard";

export default function UsersList({ users, onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {users.map(user => (
        <UserCard key={user.id} user={user} onClick={() => onSelect(user)} />
      ))}
    </div>
  );
}
