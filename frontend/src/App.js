import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrendingTopics from './components/TrendingTopics';
import HowToVideos from './components/HowToVideos';
import UserGuides from './components/UserGuides';
import KnowledgeBase from './components/KnowledgeBase';
import ContactSupport from './components/ContactSupport';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <TrendingTopics />
        <HowToVideos />
        <UserGuides />
        <KnowledgeBase />
        <ContactSupport />
      </main>
      <Footer />
    </div>
  );
}

export default App;