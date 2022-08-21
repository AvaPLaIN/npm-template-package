import React from "react";
import RowContainer from "./Row.styles";
var Row = function (_a) {
    var item = _a.item, columns = _a.columns, dataKeyExtractor = _a.dataKeyExtractor, selectable = _a.selectable, selected = _a.selected, contextMenu = _a.contextMenu, onSelect = _a.onSelect, onContextMenu = _a.onContextMenu, renderData = _a.renderData;
    return (React.createElement(RowContainer, { columns: columns, key: dataKeyExtractor(item), onClick: selectable
            ? function (event) {
                return onSelect(event, item);
            }
            : null, onContextMenu: contextMenu
            ? function (event) {
                return onContextMenu(event, item);
            }
            : null, selected: selected },
        React.createElement("div", { className: "trs" }, columns.map(function (column) { return renderData(item, column); }))));
};
export default Row;
//# sourceMappingURL=Row.js.map