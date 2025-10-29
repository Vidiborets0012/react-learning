type FooterProps = {
  year: number;
};

export default function Footer({ year }: FooterProps) {
  return (
    <footer>
      <p>© {year} React Course</p>
    </footer>
  );
}
