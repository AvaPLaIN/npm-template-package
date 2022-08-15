/// <reference types="react" />
import { Column } from "../Table";
declare type Width = {
    minWidth: number;
    defaultWidth: string | number;
};
export interface ColumnRefType extends Column {
    ref: React.RefObject<HTMLTableCellElement>;
    width: Width;
}
declare const createColumnRefs: <Type>(columns: (Type & Column)[]) => (Type & ColumnRefType)[];
export default createColumnRefs;
//# sourceMappingURL=createColumnRefs.d.ts.map