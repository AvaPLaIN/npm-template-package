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
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip, } from "chart.js";
import omit from "lodash/omit";
import React from "react";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
var options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Bar Chart",
        },
    },
};
var BarChart = function (_a) {
    var labels = _a.labels, datasets = _a.datasets, items = _a.items;
    var enhancedDatasets = datasets === null || datasets === void 0 ? void 0 : datasets.map(function (dataset) { return (__assign(__assign({}, omit(dataset, "columnId")), { data: items.map(function (item) { return parseInt(item[dataset.columnId.value]); }, 10) })); });
    var data = { labels: labels, datasets: enhancedDatasets };
    return React.createElement(Bar, { options: options, data: data });
};
export default BarChart;
//# sourceMappingURL=BarChart.js.map