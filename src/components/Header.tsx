interface HeaderProps {
  username: string;
}

export default function Header({ username }: HeaderProps) {
  return <h1>Привіт, {username}!</h1>;
}
