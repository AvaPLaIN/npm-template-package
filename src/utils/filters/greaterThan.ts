const filterByGreaterThan = <ArrayType extends { [key: string]: any }>(
  array: ArrayType[],
  filterValue: number,
  filterId: string
): ArrayType[] => {
  const copyArray = [...array];

  const filteredData = copyArray.filter((item) => {
    const itemValue = parseInt(item[filterId as keyof ArrayType], 10);
    return itemValue > filterValue;
  });

  return filteredData;
};

export default filterByGreaterThan;
