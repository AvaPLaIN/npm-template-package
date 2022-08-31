import React from "react";
interface IContextMenuProps<ItemType> {
    isOpen: boolean;
    mousePosition: {
        x: number;
        y: number;
    };
    item: ItemType | null;
    tableRef: React.RefObject<HTMLTableElement>;
    onCopy: (item: ItemType) => void;
    onOpenChart: () => void;
}
declare const _default: React.ForwardRefExoticComponent<IContextMenuProps<{
    id: string;
}> & React.RefAttributes<HTMLDivElement>>;
export default _default;
//# sourceMappingURL=ContextMenu.d.ts.map