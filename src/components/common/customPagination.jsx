import React from "react";
import ReactPaginate from "react-paginate";

const CustomPagination = ({
  pageCount,
  marginPagesDisplayed,
  pageSize,
  onPageChange
}) => {
  return (
    <nav>
      <ReactPaginate
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        pageCount={pageCount}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageSize}
        previousLabel={""}
        nextLabel={""}
        activeClassName={"active"}
        onPageChange={page => onPageChange(page)}
        initialPage={0}
      />
    </nav>
  );
};

export default CustomPagination;
