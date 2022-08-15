import React from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import PaginationContainer from "./Pagination.styles";

interface IPaginationProps {
  page: number;
  totalPages: number;
  onChangePage: (page: number) => void;
}

const Pagination = ({ page, totalPages, onChangePage }: IPaginationProps) => {
  return (
    <PaginationContainer>
      <button
        disabled={page === 1}
        className="previous-page"
        onClick={() => onChangePage(page - 1)}
      >
        <IoMdArrowRoundBack />
      </button>
      {page >= 3 && (
        <button className="first-page" onClick={() => onChangePage(1)}>
          1...
        </button>
      )}
      {page >= 2 && (
        <button
          className="previous-page"
          onClick={() => onChangePage(page - 1)}
        >
          {page - 1}
        </button>
      )}
      <button className="active-page">{page}</button>
      {page <= totalPages - 1 && (
        <button className="next-page" onClick={() => onChangePage(page + 1)}>
          {page + 1}
        </button>
      )}
      {page <= totalPages - 2 && (
        <button className="last-page" onClick={() => onChangePage(totalPages)}>
          ...{totalPages}
        </button>
      )}
      <button
        disabled={page === totalPages}
        className="next-page"
        onClick={() => onChangePage(page + 1)}
      >
        <IoMdArrowRoundForward />
      </button>
    </PaginationContainer>
  );
};

export default Pagination;
