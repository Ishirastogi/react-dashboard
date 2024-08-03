import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';
import './App.css';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');

  const renderContent = () => {
    switch (selectedPage) {
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Sidebar onSelect={setSelectedPage} />
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
