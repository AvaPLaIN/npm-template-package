import React, { useEffect, useState } from "react";
import { FilterType } from "../../../../table/hooks/useOnFilter";
import NumberFilterContainer from "./Number.styles";

interface INumberFilterProps {
  filter: FilterType;
  updateFilter: (id: string, filter: string) => void;
}

const NumberFilter = ({ filter, updateFilter }: INumberFilterProps) => {
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
    <NumberFilterContainer
      type="number"
      value={filterValue}
      onChange={handleOnChange}
    />
  );
};

export default NumberFilter;
