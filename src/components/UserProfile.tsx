// Треба створити компонент UserProfile, який:
// отримує дані користувача через props (ім’я, email, вік, аватар);
// має локальний стан (isFollowing або followers);
// дозволяє взаємодіяти з користувачем через кнопку:
// Наприклад, “Follow / Unfollow” або “❤️ Like”.

import { useState } from 'react';

type UserProfileProps = {
  name: string;
  email: string;
  age: number;
  avatar: string;
  initialFollowers?: number;
};

export default function UserProfile({
  name,
  email,
  age,
  avatar,
  initialFollowers = 100,
}: UserProfileProps) {
  const [isFollowing, setFollowing] = useState(false);
  const [followers, setFollowers] = useState(initialFollowers);

  const handleFollowing = () => {
    setFollowing(prev => !prev);
    setFollowers(prev => (isFollowing ? prev - 1 : prev + 1));
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '16px',
        maxWidth: '280px',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        margin: '20px auto',
      }}
    >
      <img
        src={avatar}
        alt={name}
        style={{ width: '100px', borderRadius: '50%' }}
      />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>Вік: {age}</p>
      <button
        onClick={handleFollowing}
        style={{
          padding: '8px 16px',
          marginTop: '10px',
          backgroundColor: isFollowing ? '#ff6666' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
      <p style={{ marginTop: '8px', color: '#555' }}>
        👥 Підписників: {followers}
      </p>
      <p style={{ color: isFollowing ? 'green' : 'gray' }}>
        {isFollowing ? 'Ви підписані ✅' : 'Ви не підписані ❌'}
      </p>
    </div>
  );
}
