import React from "react";
var SelectXAxis = function (_a) {
    var columnLabels = _a.columnLabels, xAxisLabel = _a.xAxisLabel, handleOnChangeXAxixLabel = _a.handleOnChangeXAxixLabel;
    return (React.createElement("form", null,
        React.createElement("p", null, "Select X Axis Labels"),
        React.createElement("select", { value: xAxisLabel, onChange: handleOnChangeXAxixLabel }, columnLabels.map(function (columnLabel) { return (React.createElement("option", { key: columnLabel, value: columnLabel }, columnLabel)); }))));
};
export default SelectXAxis;
//# sourceMappingURL=SelectXAxis.js.map