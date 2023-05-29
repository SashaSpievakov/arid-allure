import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Questions from './components/Questions/Questions';
import Steps from './components/Steps/Steps';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Steps />
        <Products />
        <Questions />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
