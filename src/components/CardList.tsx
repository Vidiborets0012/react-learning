import Card from './Card';

// const cards = [
//   {
//     title: 'Компоненти в React',
//     text: 'Це незалежні частини інтерфейсу, які можна повторно використовувати.',
//   },
//   {
//     title: 'Композиція',
//     text: 'Дає змогу комбінувати компоненти для створення складніших UI-структур.',
//   },
//   {
//     title: 'Вкладені компоненти',
//     text: 'Компоненти можуть містити інші компоненти.',
//   },
// ];

type CardItem = {
  title: string;
  text: string;
};

type CardListProps = {
  cards: CardItem[];
};

export default function CardList({ cards }: CardListProps) {
  return (
    <section>
      {cards.map((item, index) => (
        <Card key={index}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </Card>
      ))}
    </section>
  );
}
