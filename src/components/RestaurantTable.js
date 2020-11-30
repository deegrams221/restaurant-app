import React from 'react';

export default function RestaurantTable(props) {
  return (
    <>
      <div className='restaurant-table'>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
              <th>Phone Number</th>
              <th>Genre</th>
            </tr>
            <tr>
              <th>{props.name}</th>
              <th>{props.city}</th>
              <th>{props.state}</th>
              <th>{props.telephone}</th>
              <th>{props.genre}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
