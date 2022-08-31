import { useState } from "react";
var useOnResize = function () {
    var _a = useState(false), isFullSize = _a[0], setIsFullSize = _a[1];
    var handleToggleOnChangeSize = function () {
        setIsFullSize(function (prev) { return !prev; });
    };
    return { isFullSize: isFullSize, toggleOnChangeSize: handleToggleOnChangeSize };
};
export default useOnResize;
//# sourceMappingURL=useOnResize.js.map