const defaultRenderColumn = <ColumnType extends { label: string }>(
  item: ColumnType
) => item.label;

export default defaultRenderColumn;
