import { useState } from 'react';
import BookItem from '../BookItem/BookItem';
import styles from './BookList.module.css';

const initialBooks = [
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
  const [books] = useState(initialBooks);
  const [globalResetTrigger, setGlobalResetTrigger] = useState(0);

  const handleGlobalReset = () => {
    setGlobalResetTrigger(prev => prev + 1); // оновлюємо тригер
    console.log('🔄 Global reset triggered');
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.header}>
        <h2>📚 Список книжок</h2>
        <button
          className={`${styles.resetButton} ${styles.global}`}
          onClick={handleGlobalReset}
        >
          Reset 💗
        </button>
      </div>

      <div className={styles.list}>
        {books.map(book => (
          <BookItem
            key={book.id}
            book={book}
            globalResetTrigger={globalResetTrigger}
          />
        ))}
      </div>
    </div>
  );
}
