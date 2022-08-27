import { useState } from "react";

const useOnChart = () => {
  const [isChartOpen, setIsChartOpen] = useState(false);

  const handleOnOpenChart = () => {
    setIsChartOpen(true);
  };

  const handleOnCloseChart = () => {
    setIsChartOpen(false);
  };

  return {
    isChartOpen,
    onOpenChart: handleOnOpenChart,
    onCloseChart: handleOnCloseChart,
  };
};

export default useOnChart;
