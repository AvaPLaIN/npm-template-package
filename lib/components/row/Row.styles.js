var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var RowContainer = styled.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n\n  td {\n    ", "\n  }\n"], ["\n  color: ", ";\n\n  td {\n    ", "\n  }\n"])), function (_a) {
    var selected = _a.selected;
    return (selected ? "white" : "black");
}, function (_a) {
    var selected = _a.selected;
    return selected && "background-color: #42a8fc !important;";
});
export default RowContainer;
var templateObject_1;
//# sourceMappingURL=Row.styles.js.map