import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function RestaurantTable() {
  const [tableState, setTableState] = useState([]);
  const [search, setSearch] = useState('');
  const [searchTable, setSearchTable] = useState([]);

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

  // search by name, city, or genre
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTable(
        sortedTable.filter(
          (items) =>
            items.name.toLowerCase().includes(search.toLowerCase()) ||
            items.city.toLowerCase().includes(search.toLowerCase()) ||
            items.genre.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, 1000);
    return () => clearTimeout(timer);
  }, [search, sortedTable]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // hit enter key for search
  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      setSearch(e.target.value);
    }
  };

  return (
    <>
      <div className='restaurant-table'>
        <input
          id='searchInput'
          placeholder='Search by name, city, or genre'
          value={search}
          onChange={handleChange}
          onKeyPress={handleKeypress}
        />
        <table align='center' page-length='10'>
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
              <th>Phone Number</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {searchTable.map((data, i) => {
              return [
                <tr key={i} className='row-class'>
                  <td>{data.name}</td>
                  <td>{data.city}</td>
                  <td>{data.state}</td>
                  <td>{data.telephone}</td>
                  <td>{data.genre}</td>
                </tr>,
              ];
            })}
          </tbody>
        </table>
        {/* No results found */}
        {searchTable.length === 0 && <span>No records found to display!</span>}
      </div>
    </>
  );
}
