import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CityscapeBackground } from './components/CityscapeBackground';
import Nav from './components/Nav';

// Lazy load pages and heavy components
const Home = lazy(() => import('./components/pages/Home'));
const Blog = lazy(() => import('./components/pages/Blog'));
const AIChat = lazy(() => import('./components/AIChat'));

// Loading fallback
const PageLoader = () => (
  <div className="flex items-center justify-center h-screen w-full text-neon-blue font-mono">
    <div className="text-sm animate-pulse">INITIALIZING_SYSTEM...</div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-neon-blue/30 relative">
      <CityscapeBackground />
      <div className="relative z-10">
        <Nav />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog />} />
          </Routes>
          <AIChat />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
