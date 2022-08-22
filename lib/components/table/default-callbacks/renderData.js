import React from "react";
var defaultRenderData = function (item, column) {
    return (React.createElement("td", { key: "".concat(item.id, "-").concat(column.id) },
        React.createElement("span", null, item[column.id])));
};
export default defaultRenderData;
//# sourceMappingURL=renderData.js.map