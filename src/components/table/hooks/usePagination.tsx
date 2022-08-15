import { useCallback, useEffect, useState } from "react";
import { FilterType } from "./useOnFilter";

interface IUsePaginationProps<DataType> {
  data?: DataType[];
  page?: number;
  limit?: number;
  filter?: FilterType;
  isServerSide?: boolean;
  fetchDataOnPagination?: (
    page: number,
    limit: number,
    filter: FilterType
  ) => Promise<any>;
}

const usePagination = <DataType extends unknown>({
  data,
  page,
  limit,
  filter,
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
      filter?: FilterType
    ) => {
      const res = await fetchDataOnPagination?.(page, limit, filter!);
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
        filter
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
    filter,
    handleOnServerSideChangePage,
    isServerSide,
    limit,
  ]);

  const [isLoading, setIsLoading] = useState(isServerSide);

  const pagination = limit ? true : false;
  const [totalPages, setTotalPages] = useState(
    pagination ? Math.ceil(data!.length / (limit || 1)) : 1
  );

  const handleOnChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    pagination,
    page: currentPage,
    totalPages,
    pageData,
    limit,
    isLoading,
    onChangePage: handleOnChangePage,
  };
};

export default usePagination;
