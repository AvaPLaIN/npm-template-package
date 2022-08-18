import { FilterType } from "./useOnFilter";
import { SortType } from "./useOnSort";
interface IUsePaginationProps<DataType> {
    data?: DataType[];
    page?: number;
    limit?: number;
    sort?: SortType;
    filters?: FilterType[];
    isServerSide?: boolean;
    fetchDataOnPagination?: (page: number, limit: number, sort: SortType, filters: FilterType[]) => Promise<any>;
}
declare const usePagination: <DataType extends unknown>({ data, page, limit, sort, filters, isServerSide, fetchDataOnPagination, }: IUsePaginationProps<DataType>) => {
    pagination: boolean;
    page: number;
    totalPages: number;
    pageData: DataType[] | undefined;
    isLoading: boolean;
    onChangePage: (page: number) => void;
};
export default usePagination;
//# sourceMappingURL=usePagination.d.ts.map