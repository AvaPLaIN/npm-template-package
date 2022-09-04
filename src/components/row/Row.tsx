import React from "react";
import Checkbox from "../checkbox/Checkbox";
import RowContainer from "./Row.styles";

interface IRowProps<DataType, ColumnType> {
  item: DataType;
  columns: ColumnType[];
  selectable: boolean;
  selected: boolean;
  checkable: boolean;
  contextMenu: boolean;
  onContextMenu: (
    event: React.MouseEvent<HTMLDivElement>,
    item: DataType
  ) => void;
  onSelect: (
    event: React.MouseEvent<HTMLTableRowElement>,
    item: DataType
  ) => void;
  onAddCheckedRow: (rowId: string) => void;
  onRemoveCheckedRow: (rowId: string) => void;
  renderData: (item: DataType, column: ColumnType) => React.ReactNode;
}

const Row = <DataType extends { id: string; [key: string]: any }, ColumnType>({
  item,
  columns,
  selectable,
  selected,
  checkable,
  contextMenu,
  onSelect,
  onAddCheckedRow,
  onRemoveCheckedRow,
  onContextMenu,
  renderData,
}: IRowProps<DataType, ColumnType>) => {
  return (
    <RowContainer
      columns={columns}
      onClick={
        selectable
          ? (event: React.MouseEvent<HTMLTableRowElement>) =>
              onSelect(event, item)
          : null
      }
      onContextMenu={
        contextMenu
          ? (event: React.MouseEvent<HTMLTableRowElement>) =>
              onContextMenu(event, item)
          : null
      }
      selected={selected}
    >
      {checkable && (
        <td>
          <Checkbox
            item={item}
            onAddCheckedRow={onAddCheckedRow}
            onRemoveCheckedRow={onRemoveCheckedRow}
          />
        </td>
      )}
      {columns.map((column) => renderData(item, column))}
    </RowContainer>
  );
};

export default Row;
