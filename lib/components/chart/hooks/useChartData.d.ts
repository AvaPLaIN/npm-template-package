import { Dataset } from "../components/charts/BarChart";
interface IUseChartDataProps<DataType> {
    items: DataType[];
}
export declare type AddDatasetType = {
    label: {
        value: string;
    };
    backgroundColor: {
        value: string;
    };
    stack: {
        value: string;
    };
    columnId: {
        value: string;
    };
};
declare const useChartData: <DataType extends {
    [key: string]: any;
    id: string;
}>({ items, }: IUseChartDataProps<DataType>) => {
    labels: any[];
    columnLabels: string[];
    datasets: Dataset[];
    xAxisLabel: string;
    onChangeXAxisLabel: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    addDataset: ({ label, backgroundColor, stack, columnId, }: AddDatasetType) => void;
};
export default useChartData;
//# sourceMappingURL=useChartData.d.ts.map