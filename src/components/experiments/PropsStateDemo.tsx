import { useState } from 'react';

type PropsStateDemoProps = {
  username: string;
};

export default function PropsStateDemo({ username }: PropsStateDemoProps) {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className="demo"
      style={{
        backgroundColor: isDark ? '#333' : '#eee',
        color: isDark ? '#eee' : '#333',
      }}
    >
      <p>Привіт, {username}!</p>
      <p>Поточна тема: {isDark ? '🌙 Темна' : '☀️ Світла'}</p>
      <button onClick={() => setIsDark(!isDark)}>Змінити тему</button>
    </div>
  );
}
