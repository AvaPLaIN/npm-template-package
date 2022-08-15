import { useCallback, useEffect, useState } from "react";
import { ColumnRefType } from "../utils/createColumnRefs";

interface IUseOnResizeTableProps<ColumnType> {
  table: React.RefObject<HTMLTableElement>;
  columns: ColumnType[];
}

const useOnResizeTable = <ColumnType extends ColumnRefType>({
  table,
  columns,
}: IUseOnResizeTableProps<ColumnType>) => {
  const [resizeIndex, setResizeIndex] = useState<number | null>(null);

  const handleOnMouseMove = useCallback(
    (event: MouseEvent) => {
      const gridColumns = columns.map((column, index) => {
        if (index === resizeIndex) {
          const width = event.clientX - column.ref.current!.offsetLeft;

          if (width >= column.width.minWidth) {
            return `${width}px`;
          }
        }
        return `${column.ref.current!.offsetWidth}px`;
      });

      table.current!.style.gridTemplateColumns = `${gridColumns.join(" ")}`;
    },
    [columns, resizeIndex, table]
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener("mousemove", handleOnMouseMove);
    window.removeEventListener("mouseup", removeListeners);
  }, [handleOnMouseMove]);

  const handleOnMouseUp = useCallback(() => {
    setResizeIndex(null);
    removeListeners();
  }, [removeListeners]);

  useEffect(() => {
    if (resizeIndex !== null) {
      window.addEventListener("mousemove", handleOnMouseMove);
      window.addEventListener("mouseup", handleOnMouseUp);
    }

    return () => {
      removeListeners();
    };
  }, [handleOnMouseMove, handleOnMouseUp, removeListeners, resizeIndex]);

  return {
    resizeIndex,
    setResizeIndex,
  };
};

export default useOnResizeTable;
