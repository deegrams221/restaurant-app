import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function RestaurantTable() {
  const [tableState, setTableState] = useState([]);

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

  let sortedTable = tableState.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <div className='restaurant-table'>
        <table>
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
            {sortedTable.map((data, i) => {
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
      </div>
    </>
  );
}
