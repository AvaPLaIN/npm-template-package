/// <reference types="react" />
import { ColumnRefType } from "../utils/createColumnRefs";
interface IUseOnResizeTableProps<ColumnType> {
    table: React.RefObject<HTMLTableElement>;
    columns: ColumnType[];
}
declare const useOnResizeTable: <ColumnType extends ColumnRefType>({ table, columns, }: IUseOnResizeTableProps<ColumnType>) => {
    resizeIndex: number | null;
    setResizeIndex: import("react").Dispatch<import("react").SetStateAction<number | null>>;
};
export default useOnResizeTable;
//# sourceMappingURL=useOnResizeTable.d.ts.map