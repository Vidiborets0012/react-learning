import { useState } from 'react';

type UserCardProps = {
  name: string;
  age: number;
};

export default function UserCard({ name, age }: UserCardProps) {
  const [likes, setLikes] = useState(0);

  // const handleLikes = () => setLikes(likes + 1);
  const handleLikes = () => setLikes(prev => prev + 1);

  return (
    <div
      style={{
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        margin: '10px 0',
        textAlign: 'center',
      }}
    >
      <h2>Ім'я: {name}</h2>
      <p>Вік: {age}</p>
      <p>❤️ Лайків: {likes}</p>
      <button onClick={handleLikes}>❤️ Like</button>
    </div>
  );
}
