var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var RowContainer = styled.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  color: ", ";\n\n  td {\n    ", "\n  }\n\n  .trs {\n    grid-column: 1/-1;\n    flex: 1;\n    width: 100%;\n    display: grid;\n    grid-template-columns: ", ";\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  color: ", ";\n\n  td {\n    ", "\n  }\n\n  .trs {\n    grid-column: 1/-1;\n    flex: 1;\n    width: 100%;\n    display: grid;\n    grid-template-columns: ", ";\n  }\n"])), function (_a) {
    var selected = _a.selected;
    return (selected ? "white" : "black");
}, function (_a) {
    var selected = _a.selected;
    return selected && "background-color: #42a8fc !important;";
}, function (_a) {
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
export default RowContainer;
var templateObject_1;
//# sourceMappingURL=Row.styles.js.map