import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Pagination from './components/Pagination';
import RestaurantTable from './components/RestaurantTable';

function App() {
  const [tableState, setTableState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

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

  // render sorted data alphabetically by name
  let sortedTable = tableState.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  // pagination
  const lastDataItem = currentPage * perPage;
  const firstDataItem = lastDataItem - perPage;
  const currentDataItem = tableState.slice(firstDataItem, lastDataItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='App'>
      <Header />
      <RestaurantTable sortedTable={currentDataItem} />
      <Pagination
        perPage={perPage}
        totalDataItems={sortedTable.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
