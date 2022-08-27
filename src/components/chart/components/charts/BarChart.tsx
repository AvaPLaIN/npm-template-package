import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import omit from "lodash/omit";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Bar Chart",
    },
  },
};

export type Dataset = {
  label: string;
  data: number[];
  backgroundColor: string;
  stack: string;
  columnId: { value: string };
};

interface IBarChartProps<DataType> {
  items: DataType[];
  labels: string[];
  datasets?: Dataset[];
}

const BarChart = <DataType extends { id: string; [key: string]: any }>({
  labels,
  datasets,
  items,
}: IBarChartProps<DataType>) => {
  const enhancedDatasets = datasets?.map((dataset) => ({
    ...omit(dataset, "columnId"),
    data: items.map((item) => parseInt(item[dataset.columnId.value]), 10),
  }));
  const data = { labels, datasets: enhancedDatasets };

  return <Bar options={options} data={data as any} />;
};

export default BarChart;
