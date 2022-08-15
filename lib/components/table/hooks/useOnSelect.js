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
var useOnSelect = function () {
    var _a = useState([]), selectedRows = _a[0], setSelectedRows = _a[1];
    var handleOnSingleSelect = function (row) {
        setSelectedRows([row]);
    };
    var handleOnMultiSelect = function (row) {
        if (selectedRows.some(function (selectedRow) { return selectedRow.id === row.id; })) {
            setSelectedRows(selectedRows.filter(function (selectedRow) { return selectedRow.id !== row.id; }));
        }
        else {
            setSelectedRows(__spreadArray(__spreadArray([], selectedRows, true), [row], false));
        }
    };
    var handleOnSelect = function (event, rowData) {
        event.stopPropagation();
        if (event.shiftKey) {
            handleOnMultiSelect(rowData);
        }
        else {
            handleOnSingleSelect(rowData);
        }
    };
    return {
        selectedRows: selectedRows,
        onSelect: handleOnSelect,
    };
};
export default useOnSelect;
//# sourceMappingURL=useOnSelect.js.map