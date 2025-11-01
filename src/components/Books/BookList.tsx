import { useState } from 'react';
import BookItem from './BookItem';

export default function BookList() {
  const [books, setBooks] = useState([
    { title: '1984', author: 'Джордж Орвелл', year: 1949, likes: 0 },
    { title: 'Мистецтво війни', author: 'Сунь-цзи', year: -500, likes: 0 },
    { title: 'Фундація', author: 'Айзек Азімов', year: 1951, likes: 0 },
  ]);

  const handleLike = (index: number) => {
    setBooks(prevBooks =>
      prevBooks.map((book, i) =>
        i === index ? { ...book, likes: book.likes + 1 } : book
      )
    );
  };

  const handleReset = () => {
    setBooks(prevBooks => prevBooks.map(book => ({ ...book, likes: 0 })));
  };

  return (
    <section>
      <h2>📚 Список книжок</h2>
      <button onClick={handleReset}>🔄 Reset ❤️</button>
      <ul>
        {books.map((books, index) => (
          <BookItem
            key={index}
            title={books.title}
            author={books.author}
            year={books.year}
            likes={books.likes}
            onLike={() => handleLike(index)}
          />
        ))}
      </ul>
    </section>
  );
}
