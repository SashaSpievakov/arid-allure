import About from './components/About/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Steps from './components/Steps/Steps';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Steps />
      </main>
    </>
  );
}

export default App;
