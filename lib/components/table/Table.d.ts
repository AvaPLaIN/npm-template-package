import React from "react";
import { SortType } from "./hooks/useOnSort";
interface ITableProps<ColumnType, DataType> {
    columns: ColumnType[];
    columnKeyExtractor: (item: ColumnType) => string;
    renderColumnItem: (item: ColumnType) => React.ReactNode;
    data?: DataType[];
    dataKeyExtractor: (item: DataType) => string;
    renderData: (item: DataType, column: ColumnType) => React.ReactNode;
    isServerSide?: boolean;
    limit?: number;
    selectable?: boolean;
    resizable?: boolean;
    contextMenu?: boolean;
    fetchDataOnPagination?: (page: number, limit: number, sort: SortType) => Promise<any>;
}
declare type Width = {
    minWidth?: number;
    defaultWidth?: string | number;
};
export declare type Column = {
    id: string;
    label: string;
    filter?: boolean;
    sort?: boolean;
    width?: Width;
};
declare const Table: <ColumnType extends Column, DataType extends {
    [key: string]: any;
    id: string;
}>({ columns, columnKeyExtractor, renderColumnItem, data, dataKeyExtractor, renderData, limit, selectable, contextMenu, resizable, isServerSide, fetchDataOnPagination, }: ITableProps<ColumnType, DataType>) => JSX.Element;
export default Table;
//# sourceMappingURL=Table.d.ts.map