import React from "react";

interface ICheckboxProps<DataType> {
  item: DataType;
  onAddCheckedRow: (rowId: string) => void;
  onRemoveCheckedRow: (rowId: string) => void;
}

const Checkbox = <DataType extends { id: string; [key: string]: any }>({
  item,
  onAddCheckedRow,
  onRemoveCheckedRow,
}: ICheckboxProps<DataType>) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      onAddCheckedRow(item.id);
    } else {
      onRemoveCheckedRow(item.id);
    }
  };

  return <input onChange={handleOnChange} type="checkbox" />;
};

export default Checkbox;
