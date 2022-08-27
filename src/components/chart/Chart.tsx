import html2canvas from "html2canvas";
import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosExpand } from "react-icons/io";
import { TbDownload } from "react-icons/tb";
import ChartContainer from "./Chart.styles";
import ChartOptions from "./components/chart-options/ChartOptions";
import BarChart from "./components/charts/BarChart";
import useChartData from "./hooks/useChartData";
import useOnResize from "./hooks/useOnResize";

interface IChartProps<DataType> {
  items: DataType[];
  onCloseChart: () => void;
}

const Chart = <DataType extends { id: string; [key: string]: any }>({
  onCloseChart,
  items,
}: IChartProps<DataType>) => {
  const { isFullSize, toggleOnChangeSize } = useOnResize();

  const chartRef = useRef(null);

  const {
    labels,
    columnLabels,
    datasets,
    xAxisLabel,
    onChangeXAxisLabel,
    addDataset,
  } = useChartData({ items });

  const downloadAsImage = async () => {
    const element = chartRef.current;
    console.log("download", chartRef);
    if (element) {
      const canvas = await html2canvas(element);

      const data = canvas.toDataURL("image/jpg");
      const link = document.createElement("a");

      if (typeof link.download === "string") {
        link.href = data;
        link.download = "image.jpg";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(data);
      }
    }
  };

  return (
    <ChartContainer isFullSize={isFullSize}>
      <div className="chart-header">
        <div className="chart-selection">
          <select>
            <option value="bar">Bar Chart</option>
          </select>
        </div>
        <div className="controls">
          <button className="download" onClick={downloadAsImage}>
            <TbDownload />
          </button>
          <button className="view-control" onClick={toggleOnChangeSize}>
            <IoIosExpand />
          </button>
          <button className="close" onClick={onCloseChart}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
      <ChartOptions
        columnLabels={columnLabels}
        xAxisLabel={xAxisLabel}
        handleOnChangeXAxisLabel={onChangeXAxisLabel}
        addDataset={addDataset}
      />
      <div className="chart" ref={chartRef}>
        <BarChart items={items} labels={labels} datasets={datasets} />
      </div>
    </ChartContainer>
  );
};

export default Chart;
