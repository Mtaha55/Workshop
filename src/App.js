import React from 'react';
import Header from './components/header';
import AdvertisementList from './components/advertisementList';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <h1>Marketplace UI!</h1>
        <AdvertisementList />
      </main>
    </div>
  );
};

export default App;
