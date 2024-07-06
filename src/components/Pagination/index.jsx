import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";

import styles from "./Pagination.module.scss";
import { setCurrentPage } from "../../redux/slices/filterSlice";

const Pagination = ({ onChangePage }) => {
  const dispatch = useDispatch();
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
      pageRangeDisplayed={8}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
