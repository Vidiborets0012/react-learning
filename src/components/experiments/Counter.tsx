import { useState } from 'react';

type CounterProps = {
  initialValue: number;
};

export default function Counter({ initialValue }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <p>Поточне значення: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Скинути</button>
    </div>
  );
}
