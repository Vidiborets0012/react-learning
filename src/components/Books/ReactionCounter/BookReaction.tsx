import { useState } from 'react';
import ReactionButton from './ReactionButton';
import styles from './BookReaction.module.css';

export default function BookReaction() {
  const [likes, setLikes] = useState(0);
  const [hearts, setHearts] = useState(0);
  const [laughs, setLaughs] = useState(0);

  const resetAll = () => {
    setLikes(0);
    setHearts(0);
    setLaughs(0);
  };

  return (
    <div className={styles.reactionsContainer}>
      <ReactionButton
        emoji="👍"
        count={likes}
        onClick={() => setLikes(l => l + 1)}
      />
      <ReactionButton
        emoji="❤️"
        count={hearts}
        onClick={() => setHearts(h => h + 1)}
      />
      <ReactionButton
        emoji="😂"
        count={laughs}
        onClick={() => setLaughs(l => l + 1)}
      />
      <button className={styles.resetBtn} onClick={resetAll}>
        Reset
      </button>
    </div>
  );
}
