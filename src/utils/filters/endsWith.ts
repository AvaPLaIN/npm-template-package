const filterByEndsWith = <ArrayType extends { [key: string]: any }>(
  array: ArrayType[],
  filterValue: string,
  filterId: string
): ArrayType[] => {
  const copyArray = [...array];

  const filteredData = copyArray.filter((item) => {
    const itemValue = item[filterId as keyof ArrayType].toString();
    return itemValue.toLowerCase().endsWith(filterValue.toLowerCase());
  });

  return filteredData;
};

export default filterByEndsWith;
