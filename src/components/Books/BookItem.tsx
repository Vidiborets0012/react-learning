type BookItemProps = {
  title: string;
  author: string;
  year: number;
  likes: number;
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
    <li>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{year}</p>
      <button onClick={onLike}>❤️ {likes}</button>
    </li>
  );
}
