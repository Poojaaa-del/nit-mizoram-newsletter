import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import UpcomingEvents from './components/UpcomingEvents';
import ImportantAnnouncements from './components/ImportantAnnouncements';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
       <Navbar />
      <div className="main-content">
      <Sidebar />
      <div className="content-area">
        <Header />
        <Hero />
        <News />
        <UpcomingEvents />
        <ImportantAnnouncements />
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
