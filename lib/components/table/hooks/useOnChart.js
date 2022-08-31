import { useState } from "react";
var useOnChart = function () {
    var _a = useState(false), isChartOpen = _a[0], setIsChartOpen = _a[1];
    var handleOnOpenChart = function () {
        setIsChartOpen(true);
    };
    var handleOnCloseChart = function () {
        setIsChartOpen(false);
    };
    return {
        isChartOpen: isChartOpen,
        onOpenChart: handleOnOpenChart,
        onCloseChart: handleOnCloseChart,
    };
};
export default useOnChart;
//# sourceMappingURL=useOnChart.js.map