export declare type FilterType = {
    id: string;
    columnId: string;
    filter: string;
    value: string;
};
declare const useOnFilter: () => {
    filters: FilterType[];
    addFilter: (columnId: string, filterValue: string) => void;
    clearFilter: (id: string) => void;
    clearAllColumnFilters: (columnId: string) => void;
    clearAllFilters: () => void;
    updateFilter: (id: string, value: string) => void;
};
export default useOnFilter;
//# sourceMappingURL=useOnFilter.d.ts.map