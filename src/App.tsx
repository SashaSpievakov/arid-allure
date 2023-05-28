import About from './components/About/About';
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
      </main>
    </>
  );
}

export default App;
