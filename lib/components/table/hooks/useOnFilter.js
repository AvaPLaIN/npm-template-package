var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useState } from "react";
var useOnFilter = function () {
    var _a = useState({
        sort: { isSort: false },
    }), filter = _a[0], setFilter = _a[1];
    var test = 0;
    var handleAddFilter = function (id, value) {
        setFilter(__assign(__assign({}, filter), { sort: { isSort: true, sortBy: { id: id, value: value } } }));
    };
    var handleRemoveFilter = function () {
        setFilter(__assign(__assign({}, filter), { sort: { isSort: false } }));
    };
    return {
        test: test,
        filter: filter,
        addSort: handleAddFilter,
        removeSort: handleRemoveFilter,
    };
};
export default useOnFilter;
//# sourceMappingURL=useOnFilter.js.map