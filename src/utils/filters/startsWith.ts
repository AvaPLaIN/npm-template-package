const filterByStartsWith = <ArrayType extends { [key: string]: any }>(
  array: ArrayType[],
  filterValue: string,
  filterId: string
): ArrayType[] => {
  const copyArray = [...array];

  const filteredData = copyArray.filter((item) => {
    const itemValue = item[filterId as keyof ArrayType].toString();
    return itemValue.toLowerCase().startsWith(filterValue.toLowerCase());
  });

  return filteredData;
};

export default filterByStartsWith;
