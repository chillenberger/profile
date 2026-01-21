import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AIChat from './components/AIChat';
import { CityscapeBackground } from './components/CityscapeBackground';
import Nav from './components/Nav';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-neon-blue/30 relative">
      <CityscapeBackground />
      <div className="relative z-10">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
        <AIChat />
      </div>
    </div>
  );
};

export default App;
