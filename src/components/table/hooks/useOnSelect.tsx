import { useState } from "react";

type RowProps = { id: string };

const useOnSelect = <RowType extends RowProps>() => {
  const [selectedRows, setSelectedRows] = useState<RowType[]>([]);

  const handleOnSingleSelect = (row: RowType) => {
    setSelectedRows([row]);
  };

  const handleOnMultiSelect = (row: RowType) => {
    if (selectedRows.some((selectedRow) => selectedRow.id === row.id)) {
      setSelectedRows(
        selectedRows.filter((selectedRow) => selectedRow.id !== row.id)
      );
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  const handleOnSelect = (
    event: React.MouseEvent<HTMLTableRowElement>,
    rowData: RowType
  ) => {
    event.stopPropagation();

    if (event.shiftKey) {
      handleOnMultiSelect(rowData);
    } else {
      handleOnSingleSelect(rowData);
    }
  };

  return {
    selectedRows,
    onSelect: handleOnSelect,
  };
};

export default useOnSelect;
