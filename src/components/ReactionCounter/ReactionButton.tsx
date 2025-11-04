type ReactionButtonProps = {
  label: string;
  count: number;
  onClick: () => void;
};

export default function ReactionButton({
  label,
  count,
  onClick,
}: ReactionButtonProps) {
  return (
    <button className="reaction-button" onClick={onClick}>
      {label} <span className="reaction-count">{count}</span>
    </button>
  );
}
