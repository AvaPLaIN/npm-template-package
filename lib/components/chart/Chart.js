var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import html2canvas from "html2canvas";
import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosExpand } from "react-icons/io";
import { TbDownload } from "react-icons/tb";
import ChartContainer from "./Chart.styles";
import ChartOptions from "./components/chart-options/ChartOptions";
import BarChart from "./components/charts/BarChart";
import useChartData from "./hooks/useChartData";
import useOnResize from "./hooks/useOnResize";
var Chart = function (_a) {
    var onCloseChart = _a.onCloseChart, items = _a.items;
    var _b = useOnResize(), isFullSize = _b.isFullSize, toggleOnChangeSize = _b.toggleOnChangeSize;
    var chartRef = useRef(null);
    var _c = useChartData({ items: items }), labels = _c.labels, columnLabels = _c.columnLabels, datasets = _c.datasets, xAxisLabel = _c.xAxisLabel, onChangeXAxisLabel = _c.onChangeXAxisLabel, addDataset = _c.addDataset;
    var downloadAsImage = function () { return __awaiter(void 0, void 0, void 0, function () {
        var element, canvas, data, link;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    element = chartRef.current;
                    if (!element) return [3 /*break*/, 2];
                    return [4 /*yield*/, html2canvas(element)];
                case 1:
                    canvas = _a.sent();
                    data = canvas.toDataURL("image/jpg");
                    link = document.createElement("a");
                    if (typeof link.download === "string") {
                        link.href = data;
                        link.download = "image.jpg";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }
                    else {
                        window.open(data);
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(ChartContainer, { isFullSize: isFullSize },
        React.createElement("div", { className: "chart-header" },
            React.createElement("div", { className: "chart-selection" },
                React.createElement("select", null,
                    React.createElement("option", { value: "bar" }, "Bar Chart"))),
            React.createElement("div", { className: "controls" },
                React.createElement("button", { className: "download", onClick: downloadAsImage },
                    React.createElement(TbDownload, null)),
                React.createElement("button", { className: "view-control", onClick: toggleOnChangeSize },
                    React.createElement(IoIosExpand, null)),
                React.createElement("button", { className: "close", onClick: onCloseChart },
                    React.createElement(AiOutlineClose, null)))),
        React.createElement(ChartOptions, { columnLabels: columnLabels, xAxisLabel: xAxisLabel, handleOnChangeXAxisLabel: onChangeXAxisLabel, addDataset: addDataset }),
        React.createElement("div", { className: "chart", ref: chartRef },
            React.createElement(BarChart, { items: items, labels: labels, datasets: datasets }))));
};
export default Chart;
//# sourceMappingURL=Chart.js.map