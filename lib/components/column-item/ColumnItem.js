import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import ColumnMenu from "../column-menu/ColumnMenu";
var ColumnItem = function (_a) {
    var column = _a.column, renderColumnItem = _a.renderColumnItem, onSort = _a.onSort, sort = _a.sort, index = _a.index, setActiveIndexOnResize = _a.setActiveIndexOnResize;
    var _b = useState(false), isColumnMenuOpen = _b[0], setIsColumnMenuOpen = _b[1];
    var _c = useState(0), sortCount = _c[0], setSortCount = _c[1];
    var columnMenuRef = useRef(null);
    useOnClickOutside(columnMenuRef, function () {
        setIsColumnMenuOpen(false);
    });
    useEffect(function () {
        var isColumnSorted = sort.isSort && sort.sortBy.id === column.id;
        if (!isColumnSorted)
            setSortCount(0);
    }, [column.id, sort]);
    var handleOnSort = function (id) {
        var type = "default";
        if (sortCount % 3 === 0)
            type = "asc";
        if (sortCount % 3 === 1)
            type = "desc";
        setSortCount((sortCount % 3) + 1);
        onSort(id, type);
    };
    var handleOnMouseDown = function (index) {
        setActiveIndexOnResize(index);
    };
    var handleOnClickFilter = function () {
        setIsColumnMenuOpen(true);
    };
    return (React.createElement("th", { ref: column.ref },
        React.createElement("div", { className: "info", onClick: column.sort ? function () { return handleOnSort(column.id); } : undefined },
            React.createElement("span", null, renderColumnItem(column)),
            column.sort && (React.createElement("button", { className: "sort" }, sortCount % 3 === 1 ? "▼" : sortCount % 3 === 2 ? "▲" : ""))),
        React.createElement("div", { className: "filter", onClick: handleOnClickFilter },
            React.createElement(AiOutlineMenu, null)),
        React.createElement("div", { style: { height: "50%" }, onMouseDown: function () { return handleOnMouseDown(index); }, className: "resize-bar" }),
        React.createElement(ColumnMenu, { ref: columnMenuRef, isOpen: isColumnMenuOpen })));
};
export default ColumnItem;
//# sourceMappingURL=ColumnItem.js.map