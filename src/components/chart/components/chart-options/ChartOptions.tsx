import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { AddDatasetType } from "../../hooks/useChartData";
import ChartOptionsContainer, {
  ChartOptionsWrapper,
} from "./ChartOptions.styles";
import AddDataset from "./components/add-dataset/AddDataset";
import SelectXAxis from "./components/select-x-axis/SelectXAxis";

interface IChartOptionsProps {
  columnLabels: string[];
  xAxisLabel: string;
  handleOnChangeXAxisLabel: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  addDataset: ({
    label,
    backgroundColor,
    stack,
    columnId,
  }: AddDatasetType) => void;
}

const ChartOptions = ({
  columnLabels,
  xAxisLabel,
  handleOnChangeXAxisLabel,
  addDataset,
}: IChartOptionsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnChangeExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <ChartOptionsContainer>
      <div className="expand-options" onClick={handleOnChangeExpanded}>
        <MdExpandMore />
      </div>
      <ChartOptionsWrapper isExpanded={isExpanded}>
        <div className="select-x-axis-container">
          <SelectXAxis
            columnLabels={columnLabels}
            xAxisLabel={xAxisLabel}
            handleOnChangeXAxixLabel={handleOnChangeXAxisLabel}
          />
        </div>
        <div className="select-datasets-container">
          <AddDataset columnLabels={columnLabels} addDataset={addDataset} />
        </div>
      </ChartOptionsWrapper>
    </ChartOptionsContainer>
  );
};

export default ChartOptions;
