import React from 'react';
import Hero from './components/Hero';
import Featured from './components/Featured';
import PropertyGrid from './components/PropertyGrid';
import { Amenities, About, Contact } from './components/AmenitiesAboutContact';

function App() {
  return (
    <div className="bg-black text-white font-['Inter',sans-serif]">
      <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="text-sm tracking-[0.25em] uppercase text-white">Corporate Properties</a>
          <nav className="hidden md:flex items-center gap-6 text-white/70 text-sm">
            <a href="#properties" className="hover:text-white transition-colors">Properties</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Featured />
        <PropertyGrid />
        <Amenities />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 text-white/70 text-sm grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-white">Corporate Properties</div>
            <p className="mt-2">Gorakhnath, Gorakhpur 273001</p>
            <p className="mt-1">+91 8726884022</p>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#properties" className="hover:text-white">Properties</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <div className="md:text-right text-white/50">© {new Date().getFullYear()} Corporate Properties. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
