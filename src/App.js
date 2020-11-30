import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import RestaurantTable from './components/RestaurantTable';

function App() {
  const [tableState, setTableState] = useState([]);

  // Fetch from the restaurant api
  useEffect(() => {
    axios
      .get(`https://code-challenge.spectrumtoolbox.com/api/restaurants`, {
        headers: {
          Authorization: `Api-Key q3MNxtfep8Gt`,
        },
      })
      .then((data) => {
        console.log('data:', data);
        setTableState(data);
      })
      .catch((error) => {
        console.log('API currently down:', error);
      });
  }, []);

  return (
    <div className='App'>
      <Header />
      <RestaurantTable />
    </div>
  );
}

export default App;
