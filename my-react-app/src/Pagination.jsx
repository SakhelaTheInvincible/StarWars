import React, { useState } from 'react';
import { firstPage, lastPage, nextPage, previousPage } from './assets/PageButtons';

const Pagination = (props) => {

  const totalPages = 9;

  const handleFirstPage = () => {
    props.setPage(1);
  };

  const handlePreviousPage = () => {
    props.setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    props.setPage((prev) => prev + 1);
  };

  const handleLastPage = () => {
    props.setPage(totalPages);
  };

  const currentPage = props.currentPage;

  return (
    <div className="flex justify-center items-center">
      {currentPage > 1 && 
        <button onClick={handleFirstPage} disabled={currentPage === 1} className="mr-2">{firstPage()}</button>
      }
      {currentPage > 1 && 
        <button onClick={handlePreviousPage} disabled={currentPage === 1} className="mr-2">{previousPage()}</button>
      }
      <div className="rounded-[10px] border border-transparent w-[45px] h-[29px] pt-[0.5px] text-center text-base text-orange-400 font-medium font-inherit bg-black opacity-60 mr-2">{currentPage}</div>
      {currentPage < totalPages && 
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="mr-2">{nextPage()}</button>
      }
      {currentPage < totalPages && 
        <button onClick={handleLastPage} disabled={currentPage === totalPages} className="mr-2">{lastPage()}</button>
      }
    </div>
  );
};

export default Pagination;