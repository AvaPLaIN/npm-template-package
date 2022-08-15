declare type RowProps = {
    id: string;
};
declare const useOnSelect: <RowType extends RowProps>() => {
    selectedRows: RowType[];
    onSelect: (event: React.MouseEvent<HTMLTableRowElement>, rowData: RowType) => void;
};
export default useOnSelect;
//# sourceMappingURL=useOnSelect.d.ts.map