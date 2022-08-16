import { useState } from "react";

export type SortType = {
  isSort: boolean;
  sortBy?: {
    id: string;
    value: string;
  };
};

const useOnSort = () => {
  const [sort, setSort] = useState<SortType>({
    isSort: false,
  });

  const handleAddFilter = (id: string, value: string) => {
    setSort({
      ...sort,
      isSort: true,
      sortBy: { id, value },
    });
  };

  const handleRemoveFilter = () => {
    setSort({
      ...sort,
      isSort: false,
    });
  };

  return {
    sort,
    addSort: handleAddFilter,
    removeSort: handleRemoveFilter,
  };
};

export default useOnSort;
