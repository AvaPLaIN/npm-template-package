import { useState } from "react";

export type FilterType = {
  id: number;
  columnId: string;
  filter: string;
  value: string;
};

const useOnFilter = () => {
  const [filters, setFilters] = useState<FilterType[]>([]);

  const handleAddFilter = (columnId: string, filterValue: string) => {
    setFilters([
      ...filters,
      { id: filters.length, columnId, filter: filterValue, value: "" },
    ]);
  };

  const handleUpdateFilter = (id: number, value: string) => {
    setFilters(
      filters.map((filter) => {
        if (filter.id === id) {
          return { ...filter, value };
        }
        return filter;
      })
    );
  };

  const handleClearFilter = (id: number) => {
    setFilters(filters.filter(({ id: filterId }) => filterId !== id));
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
    updateFilter: handleUpdateFilter,
  };
};

export default useOnFilter;
