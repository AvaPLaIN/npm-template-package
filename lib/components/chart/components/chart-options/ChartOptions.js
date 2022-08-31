import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import ChartOptionsContainer, { ChartOptionsWrapper, } from "./ChartOptions.styles";
import AddDataset from "./components/add-dataset/AddDataset";
import SelectXAxis from "./components/select-x-axis/SelectXAxis";
var ChartOptions = function (_a) {
    var columnLabels = _a.columnLabels, xAxisLabel = _a.xAxisLabel, handleOnChangeXAxisLabel = _a.handleOnChangeXAxisLabel, addDataset = _a.addDataset;
    var _b = useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    var handleOnChangeExpanded = function () {
        setIsExpanded(function (prev) { return !prev; });
    };
    return (React.createElement(ChartOptionsContainer, null,
        React.createElement("div", { className: "expand-options", onClick: handleOnChangeExpanded },
            React.createElement(MdExpandMore, null)),
        React.createElement(ChartOptionsWrapper, { isExpanded: isExpanded },
            React.createElement("div", { className: "select-x-axis-container" },
                React.createElement(SelectXAxis, { columnLabels: columnLabels, xAxisLabel: xAxisLabel, handleOnChangeXAxixLabel: handleOnChangeXAxisLabel })),
            React.createElement("div", { className: "select-datasets-container" },
                React.createElement(AddDataset, { columnLabels: columnLabels, addDataset: addDataset })))));
};
export default ChartOptions;
//# sourceMappingURL=ChartOptions.js.map