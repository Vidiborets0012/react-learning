import UserCard from './UserCard';

const users = [
  {
    id: 1,
    name: 'Anna',
    email: 'anna@example.com',
    age: 28,
    avatar: 'https://i.pravatar.cc/150?img=47',
    initialFollowers: 120,
  },
  {
    id: 2,
    name: 'Max',
    email: 'max@example.com',
    age: 31,
    avatar: 'https://i.pravatar.cc/150?img=12',
    initialFollowers: 87,
  },
];

export default function UserList() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}
