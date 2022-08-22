const defaultDataKeyExtractor = <DataType extends { id: string }>(
  item: DataType
) => item.id;

export default defaultDataKeyExtractor;
