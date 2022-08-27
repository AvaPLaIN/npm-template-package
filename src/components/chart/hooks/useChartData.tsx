import { useState } from "react";
import { Dataset } from "../components/charts/BarChart";

interface IUseChartDataProps<DataType> {
  items: DataType[];
}

export type AddDatasetType = {
  label: { value: string };
  backgroundColor: { value: string };
  stack: { value: string };
  columnId: { value: string };
};

const useChartData = <DataType extends { id: string; [key: string]: any }>({
  items,
}: IUseChartDataProps<DataType>) => {
  const columnLabels = Object.keys(items[0]).filter((label) => label !== "id");
  const [xAxisLabel, setXAxixLabel] = useState(columnLabels[0]);
  const labels = items.map((item) => item[xAxisLabel]);

  const [datasets, setDatasets] = useState<Dataset[]>([]);

  const handleOnChangeXAxisLabel = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setXAxixLabel(event.target.value);
  };

  const addDataset = ({
    label,
    backgroundColor,
    stack,
    columnId,
  }: AddDatasetType) => {
    const datasetData = items.map((item) => item[columnId.value]);
    const newDataset = {
      columnId,
      label: label.value,
      backgroundColor: backgroundColor.value,
      stack: stack.value,
      data: datasetData,
    };
    setDatasets((current) => [...current, newDataset]);
  };

  return {
    labels,
    columnLabels,
    datasets,
    xAxisLabel,
    onChangeXAxisLabel: handleOnChangeXAxisLabel,
    addDataset,
  };
};

export default useChartData;
