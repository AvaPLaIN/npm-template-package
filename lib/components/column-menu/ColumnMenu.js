import React, { forwardRef, useRef } from "react";
import { CgAddR } from "react-icons/cg";
import { MdDeleteOutline } from "react-icons/md";
import ColumnMenuContainer from "./ColumnMenu.styles";
import DefaultFilter from "./components/filters/Default";
import NumberFilter from "./components/filters/Number";
var filterDisplayNames = {
    contains: {
        label: "Contains",
        Component: DefaultFilter,
    },
    notContains: {
        label: "Not Contains",
        Component: DefaultFilter,
    },
    equals: {
        label: "Equals",
        Component: DefaultFilter,
    },
    notEqual: {
        label: "Not equal",
        Component: DefaultFilter,
    },
    startsWith: {
        label: "Starts with",
        Component: DefaultFilter,
    },
    endsWith: {
        label: "Ends with",
        Component: DefaultFilter,
    },
    lessThan: {
        label: "Less than",
        Component: NumberFilter,
    },
    lessThanOrEqual: {
        label: "Less than or equal",
        Component: NumberFilter,
    },
    greaterThan: {
        label: "Greater than",
        Component: NumberFilter,
    },
    greaterThanOrEqual: {
        label: "Greater than or equal",
        Component: NumberFilter,
    },
    // date_before: "Before (Date)",
    // date_after: "After (Date)",
    // date_between: "Between (Date)",
};
var ColumnMenu = forwardRef(function (props, menuRef) {
    var columnId = props.columnId, filters = props.filters, isOpen = props.isOpen, addFilter = props.addFilter, updateFilter = props.updateFilter, clearFilter = props.clearFilter, clearAllColumnFilters = props.clearAllColumnFilters;
    var selectRef = useRef(null);
    if (!isOpen)
        return null;
    var handleAddFilter = function () {
        var _a;
        var filterValue = ((_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.value) || "contains";
        addFilter(columnId, filterValue);
    };
    return (React.createElement(ColumnMenuContainer, { ref: menuRef },
        React.createElement("div", { className: "filter-header" },
            filters.length > 0 && (React.createElement("button", { className: "clear-column-filters-button", onClick: function () { return clearAllColumnFilters(columnId); } },
                React.createElement(MdDeleteOutline, null))),
            React.createElement("button", { className: "add-filter-button", onClick: handleAddFilter },
                React.createElement(CgAddR, null)),
            React.createElement("select", { ref: selectRef, className: "filter-selector", name: "filter", id: "filter" },
                React.createElement("option", { value: "contains" }, "Contains"),
                React.createElement("option", { value: "notContains" }, "Not contains"),
                React.createElement("option", { value: "equals" }, "Equals"),
                React.createElement("option", { value: "notEqual" }, "Not equal"),
                React.createElement("option", { value: "startsWith" }, "Starts with"),
                React.createElement("option", { value: "endsWith" }, "Ends with"),
                React.createElement("option", { value: "lessThan" }, "Less than"),
                React.createElement("option", { value: "lessThanOrEqual" }, "Less than or equal"),
                React.createElement("option", { value: "greaterThan" }, "greater than"),
                React.createElement("option", { value: "greaterThanOrEqual" }, "Greater than or equal"),
                React.createElement("option", { value: "date_before" }, "Before (Date)"),
                React.createElement("option", { value: "date_after" }, "After (Date)"),
                React.createElement("option", { value: "date_between" }, "Between (Date)"))),
        React.createElement("div", { className: "active-filters" }, filters.map(function (filter) {
            var _a = filterDisplayNames[filter.filter], label = _a.label, Component = _a.Component;
            return (React.createElement("div", { key: filter.id, className: "filter-item" },
                React.createElement("button", { className: "delete-filter", onClick: function () { return clearFilter(filter.id); } },
                    React.createElement(MdDeleteOutline, null)),
                React.createElement("span", { className: "filter-label" }, label),
                React.createElement(Component, { filter: filter, updateFilter: updateFilter })));
        }))));
});
export default ColumnMenu;
//# sourceMappingURL=ColumnMenu.js.map