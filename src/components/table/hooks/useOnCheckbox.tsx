import { useState } from "react";

const useOnCheckbox = () => {
  const [checkedRows, setCheckedRows] = useState<string[]>([]);

  const handleOnAddCheckedRow = (rowId: string) => {
    setCheckedRows((prev) => [...prev, rowId]);
  };

  const handleOnRemoveCheckedRow = (rowId: string) => {
    setCheckedRows((prev) => prev.filter((row) => row !== rowId));
  };

  const handleOnClearCheckedRows = () => {
    setCheckedRows([]);
  };

  return {
    checkedRows,
    onAddCheckedRow: handleOnAddCheckedRow,
    onRemoveCheckedRow: handleOnRemoveCheckedRow,
    onClearCheckedRows: handleOnClearCheckedRows,
  };
};

export default useOnCheckbox;
