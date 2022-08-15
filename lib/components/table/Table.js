var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useRef, useState } from "react";
import { GlobalStyles } from "../../config/global.styles";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import sortAsc from "../../utils/sorts/asc";
import sortDesc from "../../utils/sorts/desc";
import ColumnItem from "../column-item/ColumnItem";
import ContextMenu from "../context-menu/ContextMenu";
import Pagination from "../pagination/Pagination";
import useOnFilter from "./hooks/useOnFilter";
import useOnResizeTable from "./hooks/useOnResizeTable";
import useOnSelect from "./hooks/useOnSelect";
import usePagination from "./hooks/usePagination";
import TableWrapper, { Row, TableContainer } from "./Table.styles";
import createColumnRefs from "./utils/createColumnRefs";
var Table = function (_a) {
    var columns = _a.columns, columnKeyExtractor = _a.columnKeyExtractor, renderColumnItem = _a.renderColumnItem, data = _a.data, dataKeyExtractor = _a.dataKeyExtractor, renderData = _a.renderData, _b = _a.isServerSide, isServerSide = _b === void 0 ? false : _b, fetchDataOnPagination = _a.fetchDataOnPagination;
    var _c = useState(data || []), sortedData = _c[0], setSortedData = _c[1];
    var _d = useState({
        isOpen: false,
        mousePosition: { x: 0, y: 0 },
        item: null,
    }), contextMenuProps = _d[0], setContextMenuProps = _d[1];
    var contextMenuRef = useRef(null);
    useOnClickOutside(contextMenuRef, function () {
        setContextMenuProps(__assign(__assign({}, contextMenuProps), { isOpen: false, item: null }));
    });
    var _e = useOnFilter(), filter = _e.filter, addSort = _e.addSort, removeSort = _e.removeSort;
    var tableRef = useRef(null);
    var columnRefs = createColumnRefs(columns);
    var _f = usePagination({
        filter: filter,
        data: sortedData,
        limit: 10,
        isServerSide: isServerSide,
        fetchDataOnPagination: fetchDataOnPagination,
    }), limit = _f.limit, pagination = _f.pagination, page = _f.page, totalPages = _f.totalPages, isLoading = _f.isLoading, pageData = _f.pageData, onChangePage = _f.onChangePage;
    var setResizeIndex = useOnResizeTable({
        table: tableRef,
        columns: columnRefs,
    }).setResizeIndex;
    var _g = useOnSelect(), selectedRows = _g.selectedRows, onSelect = _g.onSelect;
    var handleOnSort = function (column, type) {
        if (type === "default") {
            removeSort();
            setSortedData(data || []);
            return;
        }
        addSort(column, type);
        if (type === "asc")
            setSortedData(sortAsc(sortedData, column));
        if (type === "desc")
            setSortedData(sortDesc(sortedData, column));
    };
    var handleSetActiveIndexOnResize = function (index) {
        setResizeIndex(index);
    };
    var handleOnContextMenu = function (event, item) {
        event.preventDefault();
        var pageX = event.pageX, pageY = event.pageY;
        setContextMenuProps({
            isOpen: true,
            mousePosition: { x: pageX, y: pageY },
            item: item,
        });
    };
    var handleOnCloseContextMenu = function () {
        setContextMenuProps(__assign(__assign({}, contextMenuProps), { isOpen: false, item: null }));
    };
    var handleOnCopy = function (item) {
        if (selectedRows.some(function (selectedRow) { return selectedRow.id === (item === null || item === void 0 ? void 0 : item.id); })) {
            navigator.clipboard.writeText(JSON.stringify(selectedRows));
        }
        else {
            navigator.clipboard.writeText(JSON.stringify(item));
        }
        handleOnCloseContextMenu();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(GlobalStyles, null),
        React.createElement(TableContainer, null,
            React.createElement(TableWrapper, { ref: tableRef, columns: columnRefs },
                React.createElement("thead", null,
                    React.createElement("tr", null, columnRefs.map(function (column, index) { return (React.createElement(ColumnItem, { key: columnKeyExtractor(column), index: index, column: column, renderColumnItem: renderColumnItem, onSort: handleOnSort, sort: filter.sort || { isSort: false }, setActiveIndexOnResize: handleSetActiveIndexOnResize })); }))),
                React.createElement("tbody", null, isLoading
                    ? Array(limit || 10)
                        .fill(0)
                        .map(function (_, index) { return (React.createElement("tr", { key: index }, columnRefs.map(function (column, index) { return (React.createElement("td", { key: index },
                        React.createElement("div", null, "Loading..."))); }))); })
                    : pageData.map(function (item) { return (React.createElement(Row, { key: dataKeyExtractor(item), onClick: function (event) {
                            return onSelect(event, item);
                        }, onContextMenu: function (event) { return handleOnContextMenu(event, item); }, selected: selectedRows.some(function (selectedRow) { return selectedRow.id === item.id; }) }, columns.map(function (column) { return renderData(item, column); }))); }))),
            pagination && (React.createElement(Pagination, { page: page, totalPages: totalPages, onChangePage: onChangePage }))),
        React.createElement(ContextMenu, __assign({}, contextMenuProps, { item: contextMenuProps.item, onCopy: handleOnCopy, ref: contextMenuRef, tableRef: tableRef }))));
};
export default Table;
//# sourceMappingURL=Table.js.map