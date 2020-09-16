import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
// Na linha acima era pra ser: './components/Header'


function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
