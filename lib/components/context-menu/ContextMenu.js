import React, { forwardRef } from "react";
import ContextMenuContainer from "./ContextMenu.styles";
var ContextMenu = function (props, ref) {
    var isOpen = props.isOpen, mousePosition = props.mousePosition, item = props.item, onCopy = props.onCopy, tableRef = props.tableRef, onOpenChart = props.onOpenChart;
    if (!isOpen)
        return null;
    return (React.createElement(ContextMenuContainer, { ref: ref, mousePosition: mousePosition, tableRef: tableRef },
        React.createElement("ul", null,
            React.createElement("li", { onClick: function () { return onCopy(item); } }, "Copy"),
            React.createElement("li", { onClick: onOpenChart }, "Chart"))));
};
export default forwardRef(ContextMenu);
//# sourceMappingURL=ContextMenu.js.map