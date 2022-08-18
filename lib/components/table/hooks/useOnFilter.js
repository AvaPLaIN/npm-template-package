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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
var useOnFilter = function () {
    var _a = useState([]), filters = _a[0], setFilters = _a[1];
    var handleAddFilter = function (columnId, filterValue) {
        setFilters(__spreadArray(__spreadArray([], filters, true), [
            { id: uuidv4(), columnId: columnId, filter: filterValue, value: "" },
        ], false));
    };
    var handleUpdateFilter = function (id, value) {
        setFilters(filters.map(function (filter) {
            if (filter.id === id) {
                return __assign(__assign({}, filter), { value: value });
            }
            return filter;
        }));
    };
    var handleClearFilter = function (id) {
        setFilters(filters.filter(function (_a) {
            var filterId = _a.id;
            return filterId !== id;
        }));
    };
    var handleClearAllColumnFilters = function (columnId) {
        setFilters(filters.filter(function (_a) {
            var id = _a.columnId;
            return id !== columnId;
        }));
    };
    var handleClearAllFilters = function () {
        setFilters([]);
    };
    return {
        filters: filters,
        addFilter: handleAddFilter,
        clearFilter: handleClearFilter,
        clearAllColumnFilters: handleClearAllColumnFilters,
        clearAllFilters: handleClearAllFilters,
        updateFilter: handleUpdateFilter,
    };
};
export default useOnFilter;
//# sourceMappingURL=useOnFilter.js.map