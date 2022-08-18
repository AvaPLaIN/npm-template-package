import { SortType } from "./useOnSort";
interface IUsePaginationProps<DataType> {
    data?: DataType[];
    page?: number;
    limit?: number;
    sort?: SortType;
    isServerSide?: boolean;
    fetchDataOnPagination?: (page: number, limit: number, filter: SortType) => Promise<any>;
}
declare const usePagination: <DataType extends unknown>({ data, page, limit, sort, isServerSide, fetchDataOnPagination, }: IUsePaginationProps<DataType>) => {
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