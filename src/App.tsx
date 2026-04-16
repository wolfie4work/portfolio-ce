import { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Studies from './components/Studies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function LoadingFallback() {
  return (
    <div className="w-full h-full bg-concrete-800 flex items-center justify-center">
      <div className="text-center">
        <div className="font-mono text-orange text-sm animate-pulse">LOADING 3D MODEL...</div>
        <div className="mt-2 w-16 h-[2px] bg-concrete-600 mx-auto">
          <div className="w-full h-full bg-orange animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-concrete-50 text-concrete-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Suspense fallback={<LoadingFallback />}>
        <Studies />
      </Suspense>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
