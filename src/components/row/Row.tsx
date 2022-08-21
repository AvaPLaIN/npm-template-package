import React from "react";
import RowContainer from "./Row.styles";

interface IRowProps<DataType, ColumnType> {
  item: DataType;
  columns: ColumnType[];
  dataKeyExtractor: (item: DataType) => string;
  selectable: boolean;
  selected: boolean;
  contextMenu: boolean;
  onContextMenu: (
    event: React.MouseEvent<HTMLDivElement>,
    item: DataType
  ) => void;
  onSelect: (
    event: React.MouseEvent<HTMLTableRowElement>,
    item: DataType
  ) => void;
  renderData: (item: DataType, column: ColumnType) => React.ReactNode;
}

const Row = <DataType extends { id: string; [key: string]: any }, ColumnType>({
  item,
  columns,
  dataKeyExtractor,
  selectable,
  selected,
  contextMenu,
  onSelect,
  onContextMenu,
  renderData,
}: IRowProps<DataType, ColumnType>) => {
  return (
    <RowContainer
      columns={columns}
      key={dataKeyExtractor(item)}
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
      <div className="trs">
        {columns.map((column) => renderData(item, column))}
      </div>
    </RowContainer>
  );
};

export default Row;
