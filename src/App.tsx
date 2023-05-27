import About from './components/About/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
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
      </main>
    </>
  );
}

export default App;
