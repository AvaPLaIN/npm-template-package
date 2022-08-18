var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var TableContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: auto;\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n  background-color: #fff;\n  margin-bottom: 20px;\n  padding: 10px;\n  font-size: 14px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: normal;\n  color: #333;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: auto;\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n  background-color: #fff;\n  margin-bottom: 20px;\n  padding: 10px;\n  font-size: 14px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: normal;\n  color: #333;\n"])));
var TableWrapper = styled.table(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  overflow: auto;\n  border-spacing: 0;\n  display: grid;\n  grid-template-columns: ", ";\n\n  thead,\n  tbody,\n  tr {\n    user-select: none;\n    display: contents;\n  }\n\n  th {\n    position: relative;\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    user-select: none;\n\n    .info {\n      cursor: pointer;\n      display: flex;\n      gap: 0.5rem;\n      flex: 1;\n      width: 100%;\n\n      .sort {\n        background-color: transparent;\n        border: none;\n      }\n    }\n\n    .filter {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      opacity: 0;\n      transition: all 0.2s ease-in-out;\n    }\n\n    &:hover {\n      .filter {\n        opacity: 1;\n      }\n    }\n  }\n\n  th,\n  td {\n    text-align: left;\n    padding: 16px 20px;\n  }\n\n  td {\n    border-top: 1px solid #ccc;\n  }\n\n  span {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: block;\n  }\n"], ["\n  width: 100%;\n  overflow: auto;\n  border-spacing: 0;\n  display: grid;\n  grid-template-columns: ", ";\n\n  thead,\n  tbody,\n  tr {\n    user-select: none;\n    display: contents;\n  }\n\n  th {\n    position: relative;\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    user-select: none;\n\n    .info {\n      cursor: pointer;\n      display: flex;\n      gap: 0.5rem;\n      flex: 1;\n      width: 100%;\n\n      .sort {\n        background-color: transparent;\n        border: none;\n      }\n    }\n\n    .filter {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      opacity: 0;\n      transition: all 0.2s ease-in-out;\n    }\n\n    &:hover {\n      .filter {\n        opacity: 1;\n      }\n    }\n  }\n\n  th,\n  td {\n    text-align: left;\n    padding: 16px 20px;\n  }\n\n  td {\n    border-top: 1px solid #ccc;\n  }\n\n  span {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: block;\n  }\n"])), function (_a) {
    var columns = _a.columns;
    return columns
        .map(function (column) {
        if (typeof column.width.defaultWidth === "number") {
            return "".concat(column.width.defaultWidth || 200, "px");
        }
        return column.width.defaultWidth;
    })
        .join(" ");
});
export var Row = styled.tr(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n\n  td {\n    background-color: ", ";\n  }\n"], ["\n  color: ", ";\n\n  td {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var selected = _a.selected;
    return (selected ? "white" : "black");
}, function (_a) {
    var selected = _a.selected;
    return (selected ? "blue" : "transparent");
});
export default TableWrapper;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Table.styles.js.map