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

  const handleAddSort = (id: string, value: string) => {
    if (value === "default") {
      return setSort({
        isSort: false,
      });
    }

    setSort({
      isSort: true,
      sortBy: { id, value },
    });
  };

  return {
    sort,
    addSort: handleAddSort,
  };
};

export default useOnSort;
