import React, { forwardRef, useRef } from "react";
import { CgAddR } from "react-icons/cg";
import { MdDeleteOutline } from "react-icons/md";
import { FilterType } from "../table/hooks/useOnFilter";
import ColumnMenuContainer from "./ColumnMenu.styles";
import DefaultFilter from "./components/filters/Default";
import NumberFilter from "./components/filters/Number";

interface IColumnMenuProps {
  columnId: string;
  isOpen: boolean;
  filters: FilterType[];
  addFilter: (columnId: string, filter: string) => void;
  updateFilter: (id: string, filter: string) => void;
  clearFilter: (id: string) => void;
  clearAllColumnFilters: (columnId: string) => void;
}

const filterDisplayNames = {
  contains: {
    label: "Contains",
    Component: DefaultFilter,
  },
  notContains: {
    label: "Not Contains",
    Component: DefaultFilter,
  },
  equals: {
    label: "Equals",
    Component: DefaultFilter,
  },
  notEqual: {
    label: "Not equal",
    Component: DefaultFilter,
  },
  startsWith: {
    label: "Starts with",
    Component: DefaultFilter,
  },
  endsWith: {
    label: "Ends with",
    Component: DefaultFilter,
  },
  lessThan: {
    label: "Less than",
    Component: NumberFilter,
  },
  lessThanOrEqual: {
    label: "Less than or equal",
    Component: NumberFilter,
  },
  greaterThan: {
    label: "Greater than",
    Component: NumberFilter,
  },
  greaterThanOrEqual: {
    label: "Greater than or equal",
    Component: NumberFilter,
  },
  // date_before: "Before (Date)",
  // date_after: "After (Date)",
  // date_between: "Between (Date)",
};

const ColumnMenu = forwardRef<HTMLDivElement, IColumnMenuProps>(
  (props, menuRef) => {
    const {
      columnId,
      filters,
      isOpen,
      addFilter,
      updateFilter,
      clearFilter,
      clearAllColumnFilters,
    } = props;

    const selectRef = useRef<HTMLSelectElement>(null);

    if (!isOpen) return null;

    const handleAddFilter = () => {
      const filterValue = selectRef.current?.value || "contains";
      addFilter(columnId, filterValue);
    };

    return (
      <ColumnMenuContainer ref={menuRef}>
        <div className="filter-header">
          {filters.length > 0 && (
            <button
              className="clear-column-filters-button"
              onClick={() => clearAllColumnFilters(columnId)}
            >
              <MdDeleteOutline />
            </button>
          )}
          <button className="add-filter-button" onClick={handleAddFilter}>
            <CgAddR />
          </button>
          <select
            ref={selectRef}
            className="filter-selector"
            name="filter"
            id="filter"
          >
            <option value="contains">Contains</option>
            <option value="notContains">Not contains</option>
            <option value="equals">Equals</option>
            <option value="notEqual">Not equal</option>
            <option value="startsWith">Starts with</option>
            <option value="endsWith">Ends with</option>
            <option value="lessThan">Less than</option>
            <option value="lessThanOrEqual">Less than or equal</option>
            <option value="greaterThan">greater than</option>
            <option value="greaterThanOrEqual">Greater than or equal</option>
            <option value="date_before">Before (Date)</option>
            <option value="date_after">After (Date)</option>
            <option value="date_between">Between (Date)</option>
          </select>
        </div>
        <div className="active-filters">
          {filters.map((filter) => {
            const { label, Component } =
              filterDisplayNames[
                filter.filter as keyof typeof filterDisplayNames
              ];

            return (
              <div key={filter.id} className="filter-item">
                <button
                  className="delete-filter"
                  onClick={() => clearFilter(filter.id)}
                >
                  <MdDeleteOutline />
                </button>
                <span className="filter-label">{label}</span>
                <Component filter={filter} updateFilter={updateFilter} />
              </div>
            );
          })}
        </div>
      </ColumnMenuContainer>
    );
  }
);

export default ColumnMenu;
