/// <reference types="react" />
import { AddDatasetType } from "../../../../hooks/useChartData";
interface IAddDatasetProps {
    columnLabels: string[];
    addDataset: ({ label, backgroundColor, stack, columnId, }: AddDatasetType) => void;
}
declare const AddDataset: ({ columnLabels, addDataset }: IAddDatasetProps) => JSX.Element;
export default AddDataset;
//# sourceMappingURL=AddDataset.d.ts.map