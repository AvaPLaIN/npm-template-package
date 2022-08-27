import React, { forwardRef } from "react";
import ContextMenuContainer from "./ContextMenu.styles";

interface IContextMenuProps<ItemType> {
  isOpen: boolean;
  mousePosition: { x: number; y: number };
  item: ItemType | null;
  tableRef: React.RefObject<HTMLTableElement>;
  onCopy: (item: ItemType) => void;
  onOpenChart: () => void;
}

const ContextMenu = <ItemType extends { id: string }>(
  props: IContextMenuProps<ItemType>,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const { isOpen, mousePosition, item, onCopy, tableRef, onOpenChart } = props;
  if (!isOpen) return null;

  return (
    <ContextMenuContainer
      ref={ref}
      mousePosition={mousePosition}
      tableRef={tableRef}
    >
      <ul>
        <li onClick={() => onCopy(item!)}>Copy</li>
        <li onClick={onOpenChart}>Chart</li>
      </ul>
    </ContextMenuContainer>
  );
};

export default forwardRef(ContextMenu);
