import React from "react";
import { SortType } from "../table/hooks/useOnFilter";
import { Column } from "../table/Table";
import { ColumnRefType } from "../table/utils/createColumnRefs";
interface IColumnProps<ColumnType> {
    column: ColumnType;
    renderColumnItem: (item: ColumnType) => React.ReactNode;
    onSort: (column: string, type: string) => void;
    sort: SortType;
    index: number;
    setActiveIndexOnResize: (index: number) => void;
}
declare const ColumnItem: <ColumnType extends Column>({ column, renderColumnItem, onSort, sort, index, setActiveIndexOnResize, }: IColumnProps<ColumnType & ColumnRefType>) => JSX.Element;
export default ColumnItem;
//# sourceMappingURL=ColumnItem.d.ts.map