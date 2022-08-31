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
import omit from "lodash/omit";
import React from "react";
import useForm from "../../../../../../hooks/use-form/useForm";
var AddDataset = function (_a) {
    var columnLabels = _a.columnLabels, addDataset = _a.addDataset;
    var _b = useForm(), register = _b.register, onSubmit = _b.onSubmit;
    var handleOnSubmitForm = function (event) {
        var data = onSubmit(event);
        addDataset(data);
    };
    return (React.createElement("form", { onSubmit: handleOnSubmitForm },
        React.createElement("p", null, "Add"),
        React.createElement("input", __assign({}, register("label"), { type: "text", placeholder: "label name" })),
        React.createElement("input", __assign({}, register("backgroundColor"), { type: "color" })),
        React.createElement("select", __assign({}, omit(__assign({}, register("columnId", "".concat(columnLabels[0]))))), columnLabels.map(function (columnLabel) { return (React.createElement("option", { key: columnLabel, value: columnLabel }, columnLabel)); })),
        React.createElement("input", __assign({}, register("stack"), { type: "number", min: 0, placeholder: "Stack" })),
        React.createElement("button", { type: "submit" }, "Add")));
};
export default AddDataset;
//# sourceMappingURL=AddDataset.js.map