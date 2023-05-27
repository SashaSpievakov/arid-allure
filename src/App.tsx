import About from './components/About/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
