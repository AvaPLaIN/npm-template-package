import React from "react";

const defaultRenderData = <
  DataType extends { id: string; [key: string]: any },
  ColumnType extends { id: string }
>(
  item: DataType,
  column: ColumnType
) => {
  return (
    <td key={`${item.id}-${column.id}`}>
      <span>{item[column.id as keyof DataType]}</span>
    </td>
  );
};

export default defaultRenderData;
