import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Header title="Мій перший React-додаток" />
      <Main content="Це головний розділ сторінки" />
      <Footer year={2025} />
    </>
  );
}
