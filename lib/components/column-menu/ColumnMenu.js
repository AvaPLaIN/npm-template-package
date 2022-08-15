import React, { forwardRef } from "react";
import ColumnMenuContainer from "./ColumnMenu.styles";
var ColumnMenu = forwardRef(function (props, menuRef) {
    if (!props.isOpen)
        return null;
    return React.createElement(ColumnMenuContainer, { ref: menuRef }, "ColumnMenu");
});
export default ColumnMenu;
//# sourceMappingURL=ColumnMenu.js.map