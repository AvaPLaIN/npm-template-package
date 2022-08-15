import { useRef } from "react";
import { Column } from "../Table";

type Width = {
  minWidth: number;
  defaultWidth: string | number;
};

export interface ColumnRefType extends Column {
  ref: React.RefObject<HTMLTableCellElement>;
  width: Width;
}

const createColumnRefs = <Type>(
  columns: (Type & Column)[]
): (Type & ColumnRefType)[] => {
  const columnRefs = columns.map((column) => ({
    ...column,
    width: { minWidth: 150, defaultWidth: 250, ...column.width },
    ref: useRef(null),
  }));

  return columnRefs;
};

export default createColumnRefs;
