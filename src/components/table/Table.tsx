import React, { useCallback, useEffect, useRef, useState } from "react";
import { GlobalStyles } from "../../config/global.styles";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import filterByContains from "../../utils/filters/contains";
import filterByEndsWith from "../../utils/filters/endsWith";
import filterByEquals from "../../utils/filters/equals";
import filterByNotContains from "../../utils/filters/notContains";
import filterByNotEqual from "../../utils/filters/notEqual";
import filterByStartsWith from "../../utils/filters/startsWith";
import sortAsc from "../../utils/sorts/asc";
import sortDesc from "../../utils/sorts/desc";
import ColumnItem from "../column-item/ColumnItem";
import ContextMenu from "../context-menu/ContextMenu";
import Pagination from "../pagination/Pagination";
import useOnFilter, { FilterType } from "./hooks/useOnFilter";
import useOnResizeTable from "./hooks/useOnResizeTable";
import useOnSelect from "./hooks/useOnSelect";
import useOnSort, { SortType } from "./hooks/useOnSort";
import usePagination from "./hooks/usePagination";
import TableWrapper, { Row, TableContainer } from "./Table.styles";
import createColumnRefs from "./utils/createColumnRefs";

interface ITableProps<ColumnType, DataType> {
  columns: ColumnType[];
  columnKeyExtractor: (item: ColumnType) => string;
  renderColumnItem: (item: ColumnType) => React.ReactNode;
  data?: DataType[];
  dataKeyExtractor: (item: DataType) => string;
  renderData: (item: DataType, column: ColumnType) => React.ReactNode;
  isServerSide?: boolean;
  limit?: number;
  selectable?: boolean;
  resizable?: boolean;
  contextMenu?: boolean;
  fetchDataOnPagination?: (
    page: number,
    limit: number,
    sort: SortType
  ) => Promise<any>;
}

type Width = {
  minWidth?: number;
  defaultWidth?: string | number;
};

export type Column = {
  id: string;
  label: string;
  filter?: boolean;
  sort?: boolean;
  width?: Width;
};

const Table = <
  ColumnType extends Column,
  DataType extends { id: string; [key: string]: any }
>({
  columns,
  columnKeyExtractor,
  renderColumnItem,
  data,
  dataKeyExtractor,
  renderData,
  limit = 15,
  selectable = false,
  contextMenu = false,
  resizable = true,
  isServerSide = false,
  fetchDataOnPagination,
}: ITableProps<ColumnType, DataType>) => {
  const [sortedData, setSortedData] = useState(data || []);

  const [contextMenuProps, setContextMenuProps] = useState({
    isOpen: false,
    mousePosition: { x: 0, y: 0 },
    item: null as DataType | null,
  });
  const contextMenuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(contextMenuRef, () => {
    setContextMenuProps({
      ...contextMenuProps,
      isOpen: false,
      item: null,
    });
  });

  const { sort, addSort } = useOnSort();
  const {
    filters,
    addFilter,
    updateFilter,
    clearFilter,
    clearAllColumnFilters,
  } = useOnFilter();

  const tableRef = useRef<HTMLTableElement>(null);

  const columnRefs = createColumnRefs(columns);

  const { pagination, page, totalPages, isLoading, pageData, onChangePage } =
    usePagination({
      sort,
      filters,
      data: sortedData,
      limit,
      isServerSide,
      fetchDataOnPagination,
    });
  const { setResizeIndex } = useOnResizeTable({
    table: tableRef,
    columns: columnRefs,
  });

  const { selectedRows, onSelect } = useOnSelect<DataType>();

  const handleOnSort = useCallback(
    (column: string, type: string) => {
      if (type === "default") {
        return data;
      }
      if (type === "asc") return sortAsc(data!, column);
      if (type === "desc") return sortDesc(data!, column);
    },
    [data]
  );

  const handleOnFilter = useCallback(
    (array: DataType[], filter: FilterType) => {
      if (filter.filter === "contains") {
        return filterByContains(array, filter.value, filter.columnId);
      }
      if (filter.filter === "notContains" && filter.value.length > 0) {
        return filterByNotContains(array, filter.value, filter.columnId);
      }
      if (filter.filter === "equals" && filter.value.length > 0) {
        return filterByEquals(array, filter.value, filter.columnId);
      }
      if (filter.filter === "notEqual" && filter.value.length > 0) {
        return filterByNotEqual(array, filter.value, filter.columnId);
      }
      if (filter.filter === "startsWith" && filter.value.length > 0) {
        return filterByStartsWith(array, filter.value, filter.columnId);
      }
      if (filter.filter === "endsWith" && filter.value.length > 0) {
        return filterByEndsWith(array, filter.value, filter.columnId);
      }
      return array;
    },
    []
  );

  useEffect(() => {
    if (filters.length <= 0 && !sort.isSort) {
      setSortedData(data || []);
      return;
    }

    // sort dataset
    let sortedData = sort.sortBy
      ? handleOnSort(sort.sortBy.id, sort.sortBy.value)
      : data;

    // filter dataset
    filters.forEach((filter) => {
      sortedData = handleOnFilter(sortedData || [], filter);
    });

    setSortedData(sortedData || []);
  }, [data, filters, handleOnFilter, handleOnSort, sort]);

  const handleSetActiveIndexOnResize = (index: number) => {
    setResizeIndex(index);
  };

  const handleOnContextMenu = (
    event: React.MouseEvent<HTMLDivElement>,
    item: DataType
  ) => {
    event.preventDefault();
    const { pageX, pageY } = event;
    setContextMenuProps({
      isOpen: true,
      mousePosition: { x: pageX, y: pageY },
      item: item,
    });
  };

  const handleOnCloseContextMenu = () => {
    setContextMenuProps({
      ...contextMenuProps,
      isOpen: false,
      item: null,
    });
  };

  const handleOnCopy = (item: { id: string }) => {
    if (selectedRows.some((selectedRow) => selectedRow.id === item?.id)) {
      navigator.clipboard.writeText(JSON.stringify(selectedRows));
    } else {
      navigator.clipboard.writeText(JSON.stringify(item));
    }
    handleOnCloseContextMenu();
  };

  return (
    <>
      <GlobalStyles />
      <TableContainer>
        <TableWrapper ref={tableRef} columns={columnRefs}>
          <thead>
            <tr>
              {columnRefs.map((column, index) => (
                <ColumnItem
                  key={columnKeyExtractor(column)}
                  index={index}
                  column={column}
                  renderColumnItem={renderColumnItem}
                  resizable={resizable}
                  addSort={addSort}
                  sort={sort || { isSort: false }}
                  filters={filters.filter(
                    (filter) => filter.columnId === column.id
                  )}
                  addFilter={addFilter}
                  updateFilter={updateFilter}
                  clearFilter={clearFilter}
                  clearAllColumnFilters={clearAllColumnFilters}
                  setActiveIndexOnResize={handleSetActiveIndexOnResize}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? Array(limit)
                  .fill(0)
                  .map((_, index) => (
                    <tr key={index}>
                      {columnRefs.map((column, index) => (
                        <td key={index}>
                          <div>Loading...</div>
                        </td>
                      ))}
                    </tr>
                  ))
              : pageData!.map((item) => (
                  <Row
                    key={dataKeyExtractor(item)}
                    onClick={
                      selectable
                        ? (event: React.MouseEvent<HTMLTableRowElement>) =>
                            onSelect(event, item)
                        : null
                    }
                    onContextMenu={
                      contextMenu
                        ? (event: React.MouseEvent<HTMLTableRowElement>) =>
                            handleOnContextMenu(event, item)
                        : null
                    }
                    selected={selectedRows.some(
                      (selectedRow) => selectedRow.id === item.id
                    )}
                  >
                    {columns.map((column) => renderData(item, column))}
                  </Row>
                ))}
          </tbody>
        </TableWrapper>
        {pagination && (
          <Pagination
            page={page}
            totalPages={totalPages}
            onChangePage={onChangePage}
          />
        )}
      </TableContainer>
      <ContextMenu
        {...contextMenuProps}
        item={contextMenuProps.item}
        onCopy={handleOnCopy}
        ref={contextMenuRef}
        tableRef={tableRef}
      />
    </>
  );
};

export default Table;
