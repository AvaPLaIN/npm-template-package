export declare type SortType = {
    isSort: boolean;
    sortBy?: {
        id: string;
        value: string;
    };
};
declare const useOnSort: () => {
    sort: SortType;
    addSort: (id: string, value: string) => void;
};
export default useOnSort;
//# sourceMappingURL=useOnSort.d.ts.map