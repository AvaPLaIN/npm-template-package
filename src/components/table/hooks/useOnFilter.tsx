import { useState } from "react";

export type FilterType = {
  columnId: string;
  filter: string;
};

const useOnFilter = () => {
  const [filters, setFilters] = useState<FilterType[]>([]);

  const handleAddFilter = (columnId: string, filterValue: string) => {
    setFilters([...filters, { columnId, filter: filterValue }]);
  };

  const handleClearFilter = (columnId: string) => {
    setFilters(filters.filter(({ columnId: id }) => id !== columnId));
  };

  const handleClearAllColumnFilters = (columnId: string) => {
    setFilters(filters.filter(({ columnId: id }) => id !== columnId));
  };

  const handleClearAllFilters = () => {
    setFilters([]);
  };

  return {
    filters,
    addFilter: handleAddFilter,
    clearFilter: handleClearFilter,
    clearAllColumnFilters: handleClearAllColumnFilters,
    clearAllFilters: handleClearAllFilters,
  };
};

export default useOnFilter;
