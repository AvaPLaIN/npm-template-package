import React from "react";
import { FilterType } from "../../../table/hooks/useOnFilter";

interface IContainsProps {
  filter: FilterType;
  updateFilter: (id: number, filter: string) => void;
}

const Contains = ({ filter, updateFilter }: IContainsProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFilter(filter.id, e.target.value);
  };

  return <input type="text" value={filter.value} onChange={handleOnChange} />;
};

export default Contains;
