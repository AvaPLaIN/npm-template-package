import React, { useEffect, useState } from "react";
import DefaultFilterContainer from "./Default.styles";
var DefaultFilter = function (_a) {
    var filter = _a.filter, updateFilter = _a.updateFilter;
    var _b = useState(filter.value), filterValue = _b[0], setFilterValue = _b[1];
    var handleOnChange = function (e) {
        setFilterValue(e.target.value);
    };
    useEffect(function () {
        var timeout = setTimeout(function () {
            updateFilter(filter.id, filterValue);
        }, 500);
        return function () { return clearTimeout(timeout); };
    }, [filter, filterValue, updateFilter]);
    return (React.createElement(DefaultFilterContainer, { type: "text", value: filterValue, onChange: handleOnChange }));
};
export default DefaultFilter;
//# sourceMappingURL=Default.js.map