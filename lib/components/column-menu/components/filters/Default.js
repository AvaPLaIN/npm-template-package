import React from "react";
var Contains = function (_a) {
    var filter = _a.filter, updateFilter = _a.updateFilter;
    var handleOnChange = function (e) {
        updateFilter(filter.id, e.target.value);
    };
    return React.createElement("input", { type: "text", value: filter.value, onChange: handleOnChange });
};
export default Contains;
//# sourceMappingURL=Default.js.map