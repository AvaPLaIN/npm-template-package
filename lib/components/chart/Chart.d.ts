/// <reference types="react" />
interface IChartProps<DataType> {
    items: DataType[];
    onCloseChart: () => void;
}
declare const Chart: <DataType extends {
    [key: string]: any;
    id: string;
}>({ onCloseChart, items, }: IChartProps<DataType>) => JSX.Element;
export default Chart;
//# sourceMappingURL=Chart.d.ts.map