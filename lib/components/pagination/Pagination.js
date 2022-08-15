import React from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import PaginationContainer from "./Pagination.styles";
var Pagination = function (_a) {
    var page = _a.page, totalPages = _a.totalPages, onChangePage = _a.onChangePage;
    return (React.createElement(PaginationContainer, null,
        React.createElement("button", { disabled: page === 1, className: "previous-page", onClick: function () { return onChangePage(page - 1); } },
            React.createElement(IoMdArrowRoundBack, null)),
        page >= 3 && (React.createElement("button", { className: "first-page", onClick: function () { return onChangePage(1); } }, "1...")),
        page >= 2 && (React.createElement("button", { className: "previous-page", onClick: function () { return onChangePage(page - 1); } }, page - 1)),
        React.createElement("button", { className: "active-page" }, page),
        page <= totalPages - 1 && (React.createElement("button", { className: "next-page", onClick: function () { return onChangePage(page + 1); } }, page + 1)),
        page <= totalPages - 2 && (React.createElement("button", { className: "last-page", onClick: function () { return onChangePage(totalPages); } },
            "...",
            totalPages)),
        React.createElement("button", { disabled: page === totalPages, className: "next-page", onClick: function () { return onChangePage(page + 1); } },
            React.createElement(IoMdArrowRoundForward, null))));
};
export default Pagination;
//# sourceMappingURL=Pagination.js.map