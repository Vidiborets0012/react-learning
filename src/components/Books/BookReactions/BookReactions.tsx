import { useEffect, useState } from 'react';
import ReactionButton from '../ReactionButton/ReactionButton';
import type { ReactionType } from '../../../types/book';
import styles from './BookReactions.module.css';

type BookReactionsProps = {
  globalResetTrigger?: number; // оновлюється при глобальному reset
};

export default function BookReactions({
  globalResetTrigger,
}: BookReactionsProps) {
  const [reactions, setReactions] = useState({
    like: 0,
    love: 0,
    dislike: 0,
  });

  // Скидання реакцій при глобальному reset
  useEffect(() => {
    if (globalResetTrigger !== undefined) {
      setReactions({ like: 0, love: 0, dislike: 0 });
    }
  }, [globalResetTrigger]);

  // Локальне оновлення лічильників
  const handleReaction = (type: ReactionType) => {
    setReactions(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  return (
    <div className={styles.reactionsContainer}>
      <ReactionButton
        emoji="👍"
        count={reactions.like}
        onClick={() => handleReaction('like')}
      />
      <ReactionButton
        emoji="❤️"
        count={reactions.love}
        onClick={() => handleReaction('love')}
      />
      <ReactionButton
        emoji="👎"
        count={reactions.dislike}
        onClick={() => handleReaction('dislike')}
      />
    </div>
  );
}
