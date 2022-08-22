const defaultColumnKeyExtractor = <ColumnType extends { id: string }>(
  item: ColumnType
) => item.id;

export default defaultColumnKeyExtractor;
