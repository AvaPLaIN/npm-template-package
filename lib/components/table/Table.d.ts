import React from "react";
import { FilterType } from "./hooks/useOnFilter";
interface ITableProps<ColumnType, DataType> {
    columns: ColumnType[];
    columnKeyExtractor: (item: ColumnType) => string;
    renderColumnItem: (item: ColumnType) => React.ReactNode;
    data?: DataType[];
    dataKeyExtractor: (item: DataType) => string;
    renderData: (item: DataType, column: ColumnType) => React.ReactNode;
    isServerSide?: boolean;
    fetchDataOnPagination?: (page: number, limit: number, filter: FilterType) => Promise<any>;
}
declare type Width = {
    minWidth?: number;
    defaultWidth?: string | number;
};
export declare type Column = {
    id: string;
    label: string;
    filter?: string;
    sort?: boolean;
    width?: Width;
};
declare const Table: <ColumnType extends Column, DataType extends {
    id: string;
}>({ columns, columnKeyExtractor, renderColumnItem, data, dataKeyExtractor, renderData, isServerSide, fetchDataOnPagination, }: ITableProps<ColumnType, DataType>) => JSX.Element;
export default Table;
//# sourceMappingURL=Table.d.ts.map