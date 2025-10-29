type MainProps = {
  content: string;
};

export default function Main({ content }: MainProps) {
  return (
    <main>
      <p>{content}</p>
    </main>
  );
}
