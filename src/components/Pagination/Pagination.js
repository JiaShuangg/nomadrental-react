import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({info,pageNumber,setPageNumber}) => {
  return (
    <ReactPaginate 
      className="pagination justify-content-center gap-3"
      nextLabel="Next >"
      previousLabel="< Prev"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data)=>{
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  )
}

export default Pagination;
