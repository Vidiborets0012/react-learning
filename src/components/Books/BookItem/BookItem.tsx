import type { Book } from '../../../types/book';
import css from './BookItem.module.css';

export type BookItemProps = Book & {
  // id?: string;
  // title: string;
  // author: string;
  // year: number;
  // likes: number;
  onLike: () => void;
};

export default function BookItem({
  title,
  author,
  year,
  likes,
  onLike,
}: BookItemProps) {
  return (
    <li className={css.item}>
      <div className={css.content}>
        <div className={css.meta}>
          <h3>{title}</h3>
          <p>by {author}</p>
        </div>
        <div className={css.controls}>
          <span className={css.year}>{year}</span>
          <button
            className={css.likeBtn}
            onClick={onLike}
            aria-label={`Like ${title}`}
          >
            ❤️ <span className={css.likeCount}>{likes}</span>{' '}
          </button>
        </div>
      </div>
    </li>
  );
}
