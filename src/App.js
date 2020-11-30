import React from 'react';
import './App.css';
import Header from './components/Header';
import RestaurantTable from './components/RestaurantTable';

function App() {
  return (
    <div className='App'>
      <Header />
      <RestaurantTable />
    </div>
  );
}

export default App;
