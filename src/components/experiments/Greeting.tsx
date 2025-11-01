type GreetingProps = {
  name: string;
};

export default function Greeting({ name }: GreetingProps) {
  return <h2>Привіт, {name}!</h2>;
}
