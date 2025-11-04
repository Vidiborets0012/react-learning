import type { Book } from '../../../types/book';
import BookReactions from '../BookReactions/BookReactions';
import styles from './BookItem.module.css';

export type BookItemProps = {
  book: Book;
};

export default function BookItem({ book }: BookItemProps) {
  return (
    <div className={styles.bookCard}>
      <div className={styles.info}>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}>Автор: {book.author}</p>
        <p className={styles.year}>Рік видання: {book.year}</p>
      </div>

      <div className={styles.reactions}>
        <BookReactions />
      </div>
    </div>
  );
}
