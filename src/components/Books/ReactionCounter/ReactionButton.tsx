import styles from './BookReaction.module.css';

type ReactionButtonProps = {
  emoji: string;
  count: number;
  onClick: () => void;
};

export default function ReactionButton({
  emoji,
  count,
  onClick,
}: ReactionButtonProps) {
  return (
    <button className={styles.reactionBtn} onClick={onClick}>
      {emoji} ❤️ <span>{count}</span>
    </button>
  );
}
