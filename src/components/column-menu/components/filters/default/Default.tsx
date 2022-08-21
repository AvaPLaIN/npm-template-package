import React, { useEffect, useState } from "react";
import { FilterType } from "../../../../table/hooks/useOnFilter";
import DefaultFilterContainer from "./Default.styles";

interface IDefaultFilterProps {
  filter: FilterType;
  updateFilter: (id: string, filter: string) => void;
}

const DefaultFilter = ({ filter, updateFilter }: IDefaultFilterProps) => {
  const [filterValue, setFilterValue] = useState(filter.value);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateFilter(filter.id, filterValue);
    }, 500);

    return () => clearTimeout(timeout);
  }, [filter, filterValue, updateFilter]);

  return (
    <DefaultFilterContainer
      type="text"
      value={filterValue}
      onChange={handleOnChange}
    />
  );
};

export default DefaultFilter;
