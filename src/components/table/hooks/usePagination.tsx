import { useCallback, useEffect, useState } from "react";
import { FilterType } from "./useOnFilter";
import { SortType } from "./useOnSort";

interface IUsePaginationProps<DataType> {
  data?: DataType[];
  page?: number;
  limit?: number;
  sort?: SortType;
  filters?: FilterType[];
  isServerSide?: boolean;
  fetchDataOnPagination?: (
    page: number,
    limit: number,
    sort: SortType,
    filters: FilterType[]
  ) => Promise<any>;
}

const usePagination = <DataType extends unknown>({
  data,
  page,
  limit,
  sort,
  filters,
  isServerSide = false,
  fetchDataOnPagination,
}: IUsePaginationProps<DataType>) => {
  const [currentPage, setCurrentPage] = useState(page || 1);
  const [pageData, setPageData] = useState<typeof data>([]);

  const handleOnServerSideChangePage = useCallback(
    async (
      page: number,
      limit: number,
      totalPages: number,
      sort: SortType,
      filters: FilterType[]
    ) => {
      const res = await fetchDataOnPagination?.(page, limit, sort!, filters!);
      if (res.hasNextPage) setTotalPages(totalPages);
      setPageData(res.data);
      setIsLoading(false);
    },
    [fetchDataOnPagination]
  );

  useEffect(() => {
    if (isServerSide) {
      setPageData([]);
      setIsLoading(true);
      handleOnServerSideChangePage(
        currentPage,
        limit || 1,
        currentPage + 1,
        sort!,
        filters!
      );
    } else {
      setPageData(
        limit
          ? data!.slice((currentPage - 1) * limit, currentPage * limit)
          : data
      );
    }
  }, [
    currentPage,
    data,
    sort,
    filters,
    handleOnServerSideChangePage,
    isServerSide,
    limit,
  ]);

  const [isLoading, setIsLoading] = useState(isServerSide);

  const pagination = limit ? true : false;
  const [totalPages, setTotalPages] = useState(
    pagination ? Math.ceil(data!.length / (limit || 1)) : 1
  );

  useEffect(() => {
    setTotalPages(
      (pagination ? Math.ceil(data!.length / (limit || 1)) : 1) || 1
    );
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, data, limit, pagination, totalPages]);

  const handleOnChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    pagination,
    page: currentPage,
    totalPages,
    pageData,
    isLoading,
    onChangePage: handleOnChangePage,
  };
};

export default usePagination;
