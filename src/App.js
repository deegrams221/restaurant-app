import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import RestaurantTable from './components/RestaurantTable';

function App() {
  const [tableState, setTableState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  // pull restaurant data from REST API
  useEffect(() => {
    axios
      .get(`https://code-challenge.spectrumtoolbox.com/api/restaurants`, {
        headers: {
          Authorization: `Api-Key q3MNxtfep8Gt`,
        },
      })
      .then((data) => {
        const tableState = data.data;
        setTableState(tableState);
      })
      .catch((error) => {
        console.log('API currently down:', error);
      });
  }, []);

  // pagination
  const lastDataItem = currentPage * perPage;
  const firstDataItem = lastDataItem - perPage;
  const currentDataItem = tableState.slice(firstDataItem, lastDataItem);

  return (
    <div className='App'>
      <Header />
      <RestaurantTable tableState={currentDataItem} />
    </div>
  );
}

export default App;
