import { useCallback, useEffect, useState } from "react";
var useOnResizeTable = function (_a) {
    var table = _a.table, columns = _a.columns;
    var _b = useState(null), resizeIndex = _b[0], setResizeIndex = _b[1];
    var handleOnMouseMove = useCallback(function (event) {
        var gridColumns = columns.map(function (column, index) {
            if (index === resizeIndex) {
                var width = event.clientX - column.ref.current.offsetLeft;
                if (width >= column.width.minWidth) {
                    return "".concat(width, "px");
                }
            }
            return "".concat(column.ref.current.offsetWidth, "px");
        });
        table.current.style.gridTemplateColumns = "".concat(gridColumns.join(" "));
    }, [columns, resizeIndex, table]);
    var removeListeners = useCallback(function () {
        window.removeEventListener("mousemove", handleOnMouseMove);
        window.removeEventListener("mouseup", removeListeners);
    }, [handleOnMouseMove]);
    var handleOnMouseUp = useCallback(function () {
        setResizeIndex(null);
        removeListeners();
    }, [removeListeners]);
    useEffect(function () {
        if (resizeIndex !== null) {
            window.addEventListener("mousemove", handleOnMouseMove);
            window.addEventListener("mouseup", handleOnMouseUp);
        }
        return function () {
            removeListeners();
        };
    }, [handleOnMouseMove, handleOnMouseUp, removeListeners, resizeIndex]);
    return {
        resizeIndex: resizeIndex,
        setResizeIndex: setResizeIndex,
    };
};
export default useOnResizeTable;
//# sourceMappingURL=useOnResizeTable.js.map