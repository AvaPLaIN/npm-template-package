var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var ChartOptionsContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .expand-options {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 30px;\n    background-color: rgba(0, 0, 0, 0.2);\n    font-size: 2rem;\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .expand-options {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 30px;\n    background-color: rgba(0, 0, 0, 0.2);\n    font-size: 2rem;\n    cursor: pointer;\n  }\n"])));
export var ChartOptionsWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", ";\n  transition: height 0.3s ease-in;\n  overflow: hidden;\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", ";\n  transition: height 0.3s ease-in;\n  overflow: hidden;\n"])), function (_a) {
    var isExpanded = _a.isExpanded;
    return (isExpanded ? "40px" : "0");
});
export default ChartOptionsContainer;
var templateObject_1, templateObject_2;
//# sourceMappingURL=ChartOptions.styles.js.map