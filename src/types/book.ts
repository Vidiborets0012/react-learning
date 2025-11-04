export type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  likes: number;
};

export type BookListProps = {
  books: Book[];
};

export type ReactionType = 'like' | 'dislike' | 'love';
