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
var useChartData = function (_a) {
    var items = _a.items;
    var columnLabels = Object.keys(items[0]).filter(function (label) { return label !== "id"; });
    var _b = useState(columnLabels[0]), xAxisLabel = _b[0], setXAxixLabel = _b[1];
    var labels = items.map(function (item) { return item[xAxisLabel]; });
    var _c = useState([]), datasets = _c[0], setDatasets = _c[1];
    var handleOnChangeXAxisLabel = function (event) {
        setXAxixLabel(event.target.value);
    };
    var addDataset = function (_a) {
        var label = _a.label, backgroundColor = _a.backgroundColor, stack = _a.stack, columnId = _a.columnId;
        var datasetData = items.map(function (item) { return item[columnId.value]; });
        var newDataset = {
            columnId: columnId,
            label: label.value,
            backgroundColor: backgroundColor.value,
            stack: stack.value,
            data: datasetData,
        };
        setDatasets(function (current) { return __spreadArray(__spreadArray([], current, true), [newDataset], false); });
    };
    return {
        labels: labels,
        columnLabels: columnLabels,
        datasets: datasets,
        xAxisLabel: xAxisLabel,
        onChangeXAxisLabel: handleOnChangeXAxisLabel,
        addDataset: addDataset,
    };
};
export default useChartData;
//# sourceMappingURL=useChartData.js.map