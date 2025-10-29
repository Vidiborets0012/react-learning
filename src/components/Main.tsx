import Card from './Card';

export default function Main() {
  return (
    <main>
      <Card title="Про React">
        <p>React — це бібліотека для створення інтерфейсів користувача.</p>
      </Card>
      <Card title="Переваги">
        <ul>
          <li>Компонентність</li>
          <li>Швидкий рендеринг</li>
          <li>Велика спільнота</li>
        </ul>
      </Card>
    </main>
  );
}
