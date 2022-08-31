var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var ChartContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: 99;\n  position: absolute;\n  min-height: ", ";\n  width: ", ";\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n\n  .chart-header {\n    padding: 0 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid black;\n    height: 3rem;\n\n    .chart-selection {\n      select {\n        border: none;\n        width: 10rem;\n        height: 2.5rem;\n        outline: none;\n      }\n    }\n\n    .controls {\n      display: flex;\n      align-items: center;\n      gap: 1rem;\n\n      button {\n        border: none;\n        background-color: transparent;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        svg {\n          font-size: 1.6rem;\n        }\n      }\n    }\n  }\n\n  .chart {\n    align-self: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n"], ["\n  z-index: 99;\n  position: absolute;\n  min-height: ", ";\n  width: ", ";\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n\n  .chart-header {\n    padding: 0 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid black;\n    height: 3rem;\n\n    .chart-selection {\n      select {\n        border: none;\n        width: 10rem;\n        height: 2.5rem;\n        outline: none;\n      }\n    }\n\n    .controls {\n      display: flex;\n      align-items: center;\n      gap: 1rem;\n\n      button {\n        border: none;\n        background-color: transparent;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        svg {\n          font-size: 1.6rem;\n        }\n      }\n    }\n  }\n\n  .chart {\n    align-self: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n"])), function (_a) {
    var isFullSize = _a.isFullSize;
    return (isFullSize ? "100%" : "80%");
}, function (_a) {
    var isFullSize = _a.isFullSize;
    return (isFullSize ? "100%" : "80%");
});
export default ChartContainer;
var templateObject_1;
//# sourceMappingURL=Chart.styles.js.map