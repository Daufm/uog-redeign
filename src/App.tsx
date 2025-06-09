import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Academics from './components/Academics';
import Research from './components/Research';
import News from './components/News';
import Faculty from './components/Faculty';
import Campus from './components/Campus';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Academics />
      <Research />
      <News />
      <Faculty />
      <Campus />
      <Footer />
    </div>
  );
}

export default App;