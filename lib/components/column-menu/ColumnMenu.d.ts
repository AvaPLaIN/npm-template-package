import React from "react";
import { FilterType } from "../table/hooks/useOnFilter";
interface IColumnMenuProps {
    columnId: string;
    isOpen: boolean;
    filters: FilterType[];
    addFilter: (columnId: string, filter: string) => void;
    updateFilter: (id: string, filter: string) => void;
    clearFilter: (id: string) => void;
}
declare const ColumnMenu: React.ForwardRefExoticComponent<IColumnMenuProps & React.RefAttributes<HTMLDivElement>>;
export default ColumnMenu;
//# sourceMappingURL=ColumnMenu.d.ts.map