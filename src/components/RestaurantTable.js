import React, { useEffect, useState } from 'react';

export default function RestaurantTable({ sortedTable }) {
  const [search, setSearch] = useState('');
  const [searchTable, setSearchTable] = useState([]);

  // search by name, city, state, or genre
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTable(
        sortedTable.filter(
          (items) =>
            items.name.toLowerCase().includes(search.toLowerCase()) ||
            items.city.toLowerCase().includes(search.toLowerCase()) ||
            items.state.toLowerCase().includes(search.toLowerCase()) ||
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
          placeholder='Search by name, city, state, or genre'
          value={search}
          onChange={handleChange}
          onKeyPress={handleKeypress}
        />
        <table className='table mt-4'>
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
                <tr key={i}>
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
