import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Header username="Віктор" />
      <Main />
      <Footer />
    </div>
  );
}
