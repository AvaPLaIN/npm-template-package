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
import { useRef } from "react";
var createColumnRefs = function (columns) {
    var columnRefs = columns.map(function (column) { return (__assign(__assign({}, column), { width: __assign({ minWidth: 150, defaultWidth: 250 }, column.width), ref: useRef(null) })); });
    return columnRefs;
};
export default createColumnRefs;
//# sourceMappingURL=createColumnRefs.js.map