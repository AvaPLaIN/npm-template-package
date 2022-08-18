var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var ResizeBar = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  position: absolute;\n  cursor: ", ";\n  width: 7px;\n  height: 50%;\n  right: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1;\n  border-right: 1px solid transparent;\n  border-color: #ccc;\n"], ["\n  display: block;\n  position: absolute;\n  cursor: ", ";\n  width: 7px;\n  height: 50%;\n  right: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1;\n  border-right: 1px solid transparent;\n  border-color: #ccc;\n"])), function (_a) {
    var resizable = _a.resizable;
    return (resizable ? "col-resize" : "default");
});
export default ResizeBar;
var templateObject_1;
//# sourceMappingURL=ColumnItem.styles.js.map