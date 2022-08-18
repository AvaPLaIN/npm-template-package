import { useState } from "react";
var useOnSort = function () {
    var _a = useState({
        isSort: false,
    }), sort = _a[0], setSort = _a[1];
    var handleAddSort = function (id, value) {
        if (value === "default") {
            return setSort({
                isSort: false,
            });
        }
        setSort({
            isSort: true,
            sortBy: { id: id, value: value },
        });
    };
    return {
        sort: sort,
        addSort: handleAddSort,
    };
};
export default useOnSort;
//# sourceMappingURL=useOnSort.js.map