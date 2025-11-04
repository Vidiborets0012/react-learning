import { useState } from 'react';
import BookItem from '../BookItem/BookItem';
import type { Book } from '../../../types/book';
import css from './BookList.module.css';

// type Book = {
//   id: number;
//   title: string;
//   author: string;
//   year: number;
//   likes: number;
// };

const initialBooks: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    likes: 0,
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    likes: 0,
  },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949, likes: 0 },
];

export default function BookList() {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const handleLike = (id: number) => {
    setBooks(prev =>
      prev.map(book =>
        book.id === id ? { ...book, likes: book.likes + 1 } : book
      )
    );
  };

  const handleReset = () => {
    setBooks(prev => prev.map(book => ({ ...book, likes: 0 })));
  };

  return (
    <section className={css.container}>
      <div className={css.header}>
        <h2 className={css.title}>📚 Список книжок</h2>
        <button
          className={css.resetBtn}
          onClick={handleReset}
          disabled={books.every(b => b.likes === 0)}
        >
          🔄 Reset ❤️
        </button>
      </div>
      <ul className={css.list}>
        {books.length === 0 ? (
          <p className={css.empty}>No books available</p>
        ) : (
          books.map(book => (
            <BookItem
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              year={book.year}
              likes={book.likes}
              onLike={() => handleLike(book.id)}
            />
          ))
        )}
      </ul>
    </section>
  );
}
