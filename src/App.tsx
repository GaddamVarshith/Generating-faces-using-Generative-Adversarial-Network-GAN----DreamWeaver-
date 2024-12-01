import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Generator } from './components/Generator';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Gallery />
        <Generator />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;