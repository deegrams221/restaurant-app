import React from 'react';

export default function Pagination({ perPage, totalDataItems, paginate }) {
  const pageNum = [];

  for (let i = 1; i <= Math.ceil(totalDataItems / perPage); i++) {
    pageNum.push(i);
  }

  return (
    <div>
      <ul className='pagination'>
        {pageNum.map((number) => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
