import React from "react";
import { AddDatasetType } from "../../hooks/useChartData";
interface IChartOptionsProps {
    columnLabels: string[];
    xAxisLabel: string;
    handleOnChangeXAxisLabel: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    addDataset: ({ label, backgroundColor, stack, columnId, }: AddDatasetType) => void;
}
declare const ChartOptions: ({ columnLabels, xAxisLabel, handleOnChangeXAxisLabel, addDataset, }: IChartOptionsProps) => JSX.Element;
export default ChartOptions;
//# sourceMappingURL=ChartOptions.d.ts.map