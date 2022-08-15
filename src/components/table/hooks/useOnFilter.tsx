import { useState } from "react";

export type SortType = {
  isSort: boolean;
  sortBy?: {
    id: string;
    value: string;
  };
};

export type FilterType = {
  sort: SortType;
};

const useOnFilter = () => {
  const [filter, setFilter] = useState<FilterType>({
    sort: { isSort: false },
  });

  const test = 0;

  const handleAddFilter = (id: string, value: string) => {
    setFilter({
      ...filter,
      sort: { isSort: true, sortBy: { id, value } },
    });
  };

  const handleRemoveFilter = () => {
    setFilter({
      ...filter,
      sort: { isSort: false },
    });
  };

  return {
    test,
    filter,
    addSort: handleAddFilter,
    removeSort: handleRemoveFilter,
  };
};

export default useOnFilter;
