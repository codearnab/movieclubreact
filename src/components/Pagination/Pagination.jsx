/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? 'active' : ''}`}
          onClick={() => handleClick(i)}
        >
          <span className="page-link">{i}</span>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <span
            className="page-link"
            onClick={() => currentPage > 1 && handleClick(currentPage - 1)}
          >
            Previous
          </span>
        </li>
        {renderPageNumbers()}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <span
            className="page-link"
            onClick={() => currentPage < totalPages && handleClick(currentPage + 1)}
          >
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
