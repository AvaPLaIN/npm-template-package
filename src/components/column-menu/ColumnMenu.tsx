import React, { forwardRef } from "react";
import ColumnMenuContainer from "./ColumnMenu.styles";

interface IColumnMenuProps {
  isOpen: boolean;
}

const ColumnMenu = forwardRef<HTMLDivElement, IColumnMenuProps>(
  (props, menuRef) => {
    if (!props.isOpen) return null;

    return <ColumnMenuContainer ref={menuRef}>ColumnMenu</ColumnMenuContainer>;
  }
);

export default ColumnMenu;
