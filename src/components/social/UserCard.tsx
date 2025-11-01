import { useState } from 'react';

type UserCardProps = {
  name: string;
  email: string;
  age: number;
  avatar: string;
  initialFollowers: number;
};

export default function UserCard({
  name,
  email,
  age,
  avatar,
  initialFollowers,
}: UserCardProps) {
  const [followers, setFollowers] = useState(initialFollowers);
  const [isFollowing, setIsFollowing] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleFollow = () => {
    setIsFollowing(prev => !prev);
    setFollowers(prev => (isFollowing ? prev - 1 : prev + 1));
  };

  const handleLike = () => setLikes(prev => prev + 1);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '1rem',
        textAlign: 'center',
        width: '200px',
        margin: '10px auto',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
    >
      <img
        src={avatar}
        alt={name}
        style={{ borderRadius: '50%', width: '80px' }}
      />
      <h3>{name}</h3>
      <p>{email}</p>
      <p>Вік: {age}</p>
      <button
        onClick={handleFollow}
        style={{ backgroundColor: isFollowing ? '#ff7675' : '#74b9ff' }}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
      <p>Підписників: {followers}</p>
      <p>❤️ Лайків: {likes}</p>
      <button onClick={handleLike}>❤️ Like</button>
    </div>
  );
}
