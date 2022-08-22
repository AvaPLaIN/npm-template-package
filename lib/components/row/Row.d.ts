import React from "react";
interface IRowProps<DataType, ColumnType> {
    item: DataType;
    columns: ColumnType[];
    selectable: boolean;
    selected: boolean;
    contextMenu: boolean;
    onContextMenu: (event: React.MouseEvent<HTMLDivElement>, item: DataType) => void;
    onSelect: (event: React.MouseEvent<HTMLTableRowElement>, item: DataType) => void;
    renderData: (item: DataType, column: ColumnType) => React.ReactNode;
}
declare const Row: <DataType extends {
    [key: string]: any;
    id: string;
}, ColumnType>({ item, columns, selectable, selected, contextMenu, onSelect, onContextMenu, renderData, }: IRowProps<DataType, ColumnType>) => JSX.Element;
export default Row;
//# sourceMappingURL=Row.d.ts.map