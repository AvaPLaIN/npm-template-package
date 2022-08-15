import { FilterType } from "./useOnFilter";
interface IUsePaginationProps<DataType> {
    data?: DataType[];
    page?: number;
    limit?: number;
    filter?: FilterType;
    isServerSide?: boolean;
    fetchDataOnPagination?: (page: number, limit: number, filter: FilterType) => Promise<any>;
}
declare const usePagination: <DataType extends unknown>({ data, page, limit, filter, isServerSide, fetchDataOnPagination, }: IUsePaginationProps<DataType>) => {
    pagination: boolean;
    page: number;
    totalPages: number;
    pageData: DataType[] | undefined;
    limit: number | undefined;
    isLoading: boolean;
    onChangePage: (page: number) => void;
};
export default usePagination;
//# sourceMappingURL=usePagination.d.ts.map