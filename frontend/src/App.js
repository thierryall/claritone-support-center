import React from 'react';
import './App.css';
import SimpleHeader from './components/SimpleHeader';
import VideoHero from './components/VideoHero';
import VideoGrid from './components/VideoGrid';
import SimpleFooter from './components/SimpleFooter';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <SimpleHeader />
      <main className="flex-grow">
        <VideoHero />
        <VideoGrid />
      </main>
      <SimpleFooter />
    </div>
  );
}

export default App;