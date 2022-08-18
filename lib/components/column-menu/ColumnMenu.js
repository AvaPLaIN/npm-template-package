import React, { forwardRef, useRef } from "react";
import { CgAddR } from "react-icons/cg";
import { MdDeleteOutline } from "react-icons/md";
import ColumnMenuContainer from "./ColumnMenu.styles";
import Default from "./components/filters/Default";
var filterDisplayNames = {
    contains: {
        label: "Contains",
        Component: Default,
    },
    notContains: {
        label: "Not Contains",
        Component: Default,
    },
    equals: {
        label: "Equals",
        Component: Default,
    },
    notEqual: {
        label: "Not equal",
        Component: Default,
    },
    startsWith: {
        label: "Starts with",
        Component: Default,
    },
    endsWith: {
        label: "Ends with",
        Component: Default,
    },
    // lessThan: "Less than",
    // lessThanOrEqual: "Less than or equal",
    // greaterThan: "Greater than",
    // greaterThanOrEqual: "Greater than or equal",
    // date_before: "Before (Date)",
    // date_after: "After (Date)",
    // date_between: "Between (Date)",
};
var ColumnMenu = forwardRef(function (props, menuRef) {
    var columnId = props.columnId, filters = props.filters, isOpen = props.isOpen, addFilter = props.addFilter, updateFilter = props.updateFilter, clearFilter = props.clearFilter;
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
            React.createElement("button", { className: "add-filter-button", onClick: handleAddFilter },
                React.createElement(CgAddR, null)),
            React.createElement("select", { ref: selectRef, className: "filter-selector", name: "filter", id: "filter" },
                React.createElement("option", { value: "contains" }, "Contains"),
                React.createElement("option", { value: "notContains" }, "Not contains"),
                React.createElement("option", { value: "equals" }, "Equals"),
                React.createElement("option", { value: "notEqual" }, "Not equal"),
                React.createElement("option", { value: "startsWith" }, "Starts with"),
                React.createElement("option", { value: "endsWith" }, "Ends with"))),
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