import { ColumnRefType } from "./utils/createColumnRefs";
interface TableProps {
    columns: ColumnRefType[];
}
export declare const TableContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const TableWrapper: import("styled-components").StyledComponent<"table", any, TableProps, never>;
interface IRowProps {
    selected: boolean;
    [key: string]: any;
}
export declare const Row: import("styled-components").StyledComponent<"tr", any, IRowProps, never>;
export default TableWrapper;
//# sourceMappingURL=Table.styles.d.ts.map