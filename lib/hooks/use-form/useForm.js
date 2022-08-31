import unset from "lodash/unset";
import { useRef } from "react";
import getEventValue from "./utils/getEventValue";
import getUpdatedValues from "./utils/getUpdatedValues";
//! Hook
var useForm = function () {
    var values = useRef({});
    var registeredControls = useRef({});
    var handleUnsetValues = function (id) {
        var currentValues = structuredClone(values.current);
        unset(currentValues, id);
        return currentValues;
    };
    var handleFirstRegister = function (id) {
        registeredControls.current = getUpdatedValues(registeredControls.current, id, { value: true });
    };
    var hasRegistered = function (id) {
        var _a;
        var currentValues = structuredClone(registeredControls.current);
        return !!((_a = currentValues[id]) === null || _a === void 0 ? void 0 : _a.value);
    };
    var register = function (id, defaultValue) {
        if (!hasRegistered(id)) {
            handleFirstRegister(id);
            values.current = getUpdatedValues(values.current, id, {
                value: defaultValue || "",
            });
        }
        var onChange = function (event) {
            var value = getEventValue(event);
            values.current = getUpdatedValues(values.current, id, {
                value: value,
            });
        };
        return { onChange: onChange, defaultValue: defaultValue };
    };
    var unregister = function (id) {
        values.current = handleUnsetValues(id);
    };
    var getFormValues = function () { return values.current; };
    var onSubmit = function (event
    // callback: (data: FormValues) => void
    ) {
        event.preventDefault();
        var data = getFormValues();
        return data;
    };
    return { onSubmit: onSubmit, register: register, unregister: unregister, getFormValues: getFormValues };
};
export default useForm;
//# sourceMappingURL=useForm.js.map