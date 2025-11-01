import { useState } from 'react';
import ReactionButton from './ReactionButton';
import './ReactionCounter.css';

export default function ReactionCounter() {
  const [likes, setLikes] = useState(0);
  const [hearts, setHearts] = useState(0);
  const [laughs, setLaughs] = useState(0);

  const resetAll = () => {
    setLikes(0);
    setHearts(0);
    setLaughs(0);
  };

  return (
    <div className="reaction-counter">
      <ReactionButton
        label="👍"
        count={likes}
        onClick={() => setLikes(prev => prev + 1)}
      />
      <ReactionButton
        label="❤️"
        count={hearts}
        onClick={() => setHearts(prev => prev + 1)}
      />
      <ReactionButton
        label="😂"
        count={laughs}
        onClick={() => setLaughs(prev => prev + 1)}
      />

      <button className="reset-button" onClick={resetAll}>
        Reset
      </button>
    </div>
  );
}
