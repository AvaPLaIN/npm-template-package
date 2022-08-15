var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var ContextMenuContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: 2;\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n  right: 10px;\n  width: 200px;\n  background-color: grey;\n\n  ul {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    align-items: center;\n    background-color: black;\n    padding: 1px;\n\n    li {\n      color: white;\n      background-color: grey;\n      width: 100%;\n      padding: 10px;\n      cursor: pointer;\n    }\n  }\n"], ["\n  z-index: 2;\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n  right: 10px;\n  width: 200px;\n  background-color: grey;\n\n  ul {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    align-items: center;\n    background-color: black;\n    padding: 1px;\n\n    li {\n      color: white;\n      background-color: grey;\n      width: 100%;\n      padding: 10px;\n      cursor: pointer;\n    }\n  }\n"])), function (props) { return props.mousePosition.y; }, function (props) {
    var _a, _b, _c, _d;
    if (props.mousePosition.x + 172 > ((_b = (_a = props === null || props === void 0 ? void 0 : props.tableRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.offsetWidth)) {
        return ((_d = (_c = props === null || props === void 0 ? void 0 : props.tableRef) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.offsetWidth) - 172;
    }
    else {
        return props.mousePosition.x;
    }
});
export default ContextMenuContainer;
var templateObject_1;
//# sourceMappingURL=ContextMenu.styles.js.map