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
        const tableState = data.data;
        console.log('data:', tableState);
        setTableState(tableState);
      })
      .catch((error) => {
        console.log('API currently down:', error);
      });
  }, []);

  return (
    <div className='App'>
      <Header />
      {tableState.map((data) => {
        return <RestaurantTable key={data.props} data={data} />;
      })}
    </div>
  );
}

export default App;
