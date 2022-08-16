import React, { forwardRef } from "react";
import ColumnMenuContainer from "./ColumnMenu.styles";

interface IColumnMenuProps {
  isOpen: boolean;
}

const ColumnMenu = forwardRef<HTMLDivElement, IColumnMenuProps>(
  (props, menuRef) => {
    if (!props.isOpen) return null;

    return (
      <ColumnMenuContainer ref={menuRef}>
        <div className="filter-header">
          <button className="add-filter-button">Add</button>
          <select className="filter-selector" name="filter" id="filter">
            <option value="contains">Contains</option>
            <option value="notContains">Not contains</option>
            <option value="equals">Equals</option>
            <option value="notEqual">Not equal</option>
            <option value="startsWith">Starts with</option>
            <option value="endsWith">Ends with</option>
            <option value="endsWith">Blank</option>
            <option value="endsWith">Not Blank</option>
            <option value="date_before">Before (Date)</option>
            <option value="date_after">After (Date)</option>
            <option value="date_between">Between (Date)</option>
          </select>
        </div>
        <div className="active-filters">
          <div className="filter-item">
            <p>Starts With:</p>
            <input type="text" />
          </div>
        </div>
      </ColumnMenuContainer>
    );
  }
);

export default ColumnMenu;
