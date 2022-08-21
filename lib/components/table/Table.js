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
import React, { useCallback, useEffect, useRef, useState } from "react";
import { GlobalStyles } from "../../config/global.styles";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import filterByContains from "../../utils/filters/contains";
import filterByEndsWith from "../../utils/filters/endsWith";
import filterByEquals from "../../utils/filters/equals";
import filterByGreaterThan from "../../utils/filters/greaterThan";
import filterByGreaterThanOrEqual from "../../utils/filters/greaterThanOrEqual";
import filterByLessThan from "../../utils/filters/lessThan";
import filterByLessThanOrEqual from "../../utils/filters/lessThanOrEqual";
import filterByNotContains from "../../utils/filters/notContains";
import filterByNotEqual from "../../utils/filters/notEqual";
import filterByStartsWith from "../../utils/filters/startsWith";
import sortAsc from "../../utils/sorts/asc";
import sortDesc from "../../utils/sorts/desc";
import ColumnItem from "../column-item/ColumnItem";
import ContextMenu from "../context-menu/ContextMenu";
import Pagination from "../pagination/Pagination";
import useOnFilter from "./hooks/useOnFilter";
import useOnResizeTable from "./hooks/useOnResizeTable";
import useOnSelect from "./hooks/useOnSelect";
import useOnSort from "./hooks/useOnSort";
import usePagination from "./hooks/usePagination";
import TableWrapper, { Row, TableContainer } from "./Table.styles";
import createColumnRefs from "./utils/createColumnRefs";
var Table = function (_a) {
    var columns = _a.columns, columnKeyExtractor = _a.columnKeyExtractor, renderColumnItem = _a.renderColumnItem, data = _a.data, dataKeyExtractor = _a.dataKeyExtractor, renderData = _a.renderData, _b = _a.limit, limit = _b === void 0 ? 15 : _b, _c = _a.selectable, selectable = _c === void 0 ? false : _c, _d = _a.contextMenu, contextMenu = _d === void 0 ? false : _d, _e = _a.resizable, resizable = _e === void 0 ? true : _e, _f = _a.isServerSide, isServerSide = _f === void 0 ? false : _f, fetchDataOnPagination = _a.fetchDataOnPagination;
    var _g = useState(data || []), sortedData = _g[0], setSortedData = _g[1];
    var _h = useState({
        isOpen: false,
        mousePosition: { x: 0, y: 0 },
        item: null,
    }), contextMenuProps = _h[0], setContextMenuProps = _h[1];
    var contextMenuRef = useRef(null);
    useOnClickOutside(contextMenuRef, function () {
        setContextMenuProps(__assign(__assign({}, contextMenuProps), { isOpen: false, item: null }));
    });
    var _j = useOnSort(), sort = _j.sort, addSort = _j.addSort;
    var _k = useOnFilter(), filters = _k.filters, addFilter = _k.addFilter, updateFilter = _k.updateFilter, clearFilter = _k.clearFilter, clearAllColumnFilters = _k.clearAllColumnFilters;
    var tableRef = useRef(null);
    var columnRefs = createColumnRefs(columns);
    var _l = usePagination({
        sort: sort,
        filters: filters,
        data: sortedData,
        limit: limit,
        isServerSide: isServerSide,
        fetchDataOnPagination: fetchDataOnPagination,
    }), pagination = _l.pagination, page = _l.page, totalPages = _l.totalPages, isLoading = _l.isLoading, pageData = _l.pageData, onChangePage = _l.onChangePage;
    var setResizeIndex = useOnResizeTable({
        table: tableRef,
        columns: columnRefs,
    }).setResizeIndex;
    var _m = useOnSelect(), selectedRows = _m.selectedRows, onSelect = _m.onSelect;
    var handleOnSort = useCallback(function (column, type) {
        if (type === "default") {
            return data;
        }
        if (type === "asc")
            return sortAsc(data, column);
        if (type === "desc")
            return sortDesc(data, column);
    }, [data]);
    var handleOnFilter = useCallback(function (array, filter) {
        if (filter.filter === "contains") {
            return filterByContains(array, filter.value, filter.columnId);
        }
        if (filter.filter === "notContains" && filter.value.length > 0) {
            return filterByNotContains(array, filter.value, filter.columnId);
        }
        if (filter.filter === "equals" && filter.value.length > 0) {
            return filterByEquals(array, filter.value, filter.columnId);
        }
        if (filter.filter === "notEqual" && filter.value.length > 0) {
            return filterByNotEqual(array, filter.value, filter.columnId);
        }
        if (filter.filter === "startsWith" && filter.value.length > 0) {
            return filterByStartsWith(array, filter.value, filter.columnId);
        }
        if (filter.filter === "endsWith" && filter.value.length > 0) {
            return filterByEndsWith(array, filter.value, filter.columnId);
        }
        if (filter.filter === "lessThan" && filter.value.length > 0) {
            return filterByLessThan(array, parseInt(filter.value, 10), filter.columnId);
        }
        if (filter.filter === "lessThanOrEqual" && filter.value.length > 0) {
            return filterByLessThanOrEqual(array, parseInt(filter.value, 10), filter.columnId);
        }
        if (filter.filter === "greaterThan" && filter.value.length > 0) {
            return filterByGreaterThan(array, parseInt(filter.value, 10), filter.columnId);
        }
        if (filter.filter === "greaterThanOrEqual" && filter.value.length > 0) {
            return filterByGreaterThanOrEqual(array, parseInt(filter.value, 10), filter.columnId);
        }
        return array;
    }, []);
    useEffect(function () {
        if (filters.length <= 0 && !sort.isSort) {
            setSortedData(data || []);
            return;
        }
        // sort dataset
        var sortedData = sort.sortBy
            ? handleOnSort(sort.sortBy.id, sort.sortBy.value)
            : data;
        // filter dataset
        filters.forEach(function (filter) {
            sortedData = handleOnFilter(sortedData || [], filter);
        });
        setSortedData(sortedData || []);
    }, [data, filters, handleOnFilter, handleOnSort, sort]);
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
                    React.createElement("tr", null, columnRefs.map(function (column, index) { return (React.createElement(ColumnItem, { key: columnKeyExtractor(column), index: index, column: column, renderColumnItem: renderColumnItem, resizable: resizable, addSort: addSort, sort: sort || { isSort: false }, filters: filters.filter(function (filter) { return filter.columnId === column.id; }), addFilter: addFilter, updateFilter: updateFilter, clearFilter: clearFilter, clearAllColumnFilters: clearAllColumnFilters, setActiveIndexOnResize: handleSetActiveIndexOnResize })); }))),
                React.createElement("tbody", null, isLoading
                    ? Array(limit)
                        .fill(0)
                        .map(function (_, index) { return (React.createElement("tr", { key: index }, columnRefs.map(function (column, index) { return (React.createElement("td", { key: index },
                        React.createElement("div", null, "Loading..."))); }))); })
                    : pageData.map(function (item) { return (React.createElement(Row, { key: dataKeyExtractor(item), onClick: selectable
                            ? function (event) {
                                return onSelect(event, item);
                            }
                            : null, onContextMenu: contextMenu
                            ? function (event) {
                                return handleOnContextMenu(event, item);
                            }
                            : null, selected: selectedRows.some(function (selectedRow) { return selectedRow.id === item.id; }) }, columns.map(function (column) { return renderData(item, column); }))); }))),
            pagination && (React.createElement(Pagination, { page: page, totalPages: totalPages, onChangePage: onChangePage }))),
        React.createElement(ContextMenu, __assign({}, contextMenuProps, { item: contextMenuProps.item, onCopy: handleOnCopy, ref: contextMenuRef, tableRef: tableRef }))));
};
export default Table;
//# sourceMappingURL=Table.js.map