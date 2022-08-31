/// <reference types="react" />
export declare type Dataset = {
    label: string;
    data: number[];
    backgroundColor: string;
    stack: string;
    columnId: {
        value: string;
    };
};
interface IBarChartProps<DataType> {
    items: DataType[];
    labels: string[];
    datasets?: Dataset[];
}
declare const BarChart: <DataType extends {
    [key: string]: any;
    id: string;
}>({ labels, datasets, items, }: IBarChartProps<DataType>) => JSX.Element;
export default BarChart;
//# sourceMappingURL=BarChart.d.ts.map