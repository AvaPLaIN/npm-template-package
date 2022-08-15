const sortDesc = <ArrayType>(array: ArrayType[], key: string): ArrayType[] => {
  const copyArray = [...array];

  const sortedData = copyArray.sort((a, b) => {
    const aValue = a[key as keyof ArrayType];
    const bValue = b[key as keyof ArrayType];

    if (aValue < bValue) return 1;
    if (aValue > bValue) return -1;
    return 0;
  });

  return sortedData;
};

export default sortDesc;
