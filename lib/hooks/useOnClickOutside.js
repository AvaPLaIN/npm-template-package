import { useEffect } from "react";
var useOnClickOutside = function (ref, handler) {
    useEffect(function () {
        var listener = function (event) {
            var _a;
            if (!ref.current || ((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        return function () {
            document.removeEventListener("mousedown", listener);
        };
    }, [ref, handler]);
};
export default useOnClickOutside;
//# sourceMappingURL=useOnClickOutside.js.map