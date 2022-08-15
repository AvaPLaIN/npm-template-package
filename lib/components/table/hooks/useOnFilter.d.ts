export declare type SortType = {
    isSort: boolean;
    sortBy?: {
        id: string;
        value: string;
    };
};
export declare type FilterType = {
    sort: SortType;
};
declare const useOnFilter: () => {
    test: number;
    filter: FilterType;
    addSort: (id: string, value: string) => void;
    removeSort: () => void;
};
export default useOnFilter;
//# sourceMappingURL=useOnFilter.d.ts.map