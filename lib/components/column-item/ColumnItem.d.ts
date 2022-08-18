import React from "react";
import { FilterType } from "../table/hooks/useOnFilter";
import { SortType } from "../table/hooks/useOnSort";
import { Column } from "../table/Table";
import { ColumnRefType } from "../table/utils/createColumnRefs";
interface IColumnProps<ColumnType> {
    column: ColumnType;
    renderColumnItem: (item: ColumnType) => React.ReactNode;
    addSort: (id: string, value: string) => void;
    sort: SortType;
    filters: FilterType[];
    addFilter: (columnId: string, filter: string) => void;
    updateFilter: (id: string, filter: string) => void;
    clearFilter: (id: string) => void;
    clearAllColumnFilters: (columnId: string) => void;
    index: number;
    resizable: boolean;
    setActiveIndexOnResize: (index: number) => void;
}
declare const ColumnItem: <ColumnType extends Column>({ column, renderColumnItem, addSort, sort, filters, addFilter, updateFilter, clearFilter, clearAllColumnFilters, index, resizable, setActiveIndexOnResize, }: IColumnProps<ColumnType & ColumnRefType>) => JSX.Element;
export default ColumnItem;
//# sourceMappingURL=ColumnItem.d.ts.map