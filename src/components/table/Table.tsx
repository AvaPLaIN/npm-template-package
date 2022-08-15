import React, { useRef, useState } from "react";
import { GlobalStyles } from "../../config/global.styles";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import sortAsc from "../../utils/sorts/asc";
import sortDesc from "../../utils/sorts/desc";
import ColumnItem from "../column-item/ColumnItem";
import ContextMenu from "../context-menu/ContextMenu";
import Pagination from "../pagination/Pagination";
import useOnFilter, { FilterType } from "./hooks/useOnFilter";
import useOnResizeTable from "./hooks/useOnResizeTable";
import useOnSelect from "./hooks/useOnSelect";
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
  fetchDataOnPagination?: (
    page: number,
    limit: number,
    filter: FilterType
  ) => Promise<any>;
}

type Width = {
  minWidth?: number;
  defaultWidth?: string | number;
};

export type Column = {
  id: string;
  label: string;
  filter?: string;
  sort?: boolean;
  width?: Width;
};

const Table = <ColumnType extends Column, DataType extends { id: string }>({
  columns,
  columnKeyExtractor,
  renderColumnItem,
  data,
  dataKeyExtractor,
  renderData,
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

  const { filter, addSort, removeSort } = useOnFilter();

  const tableRef = useRef<HTMLTableElement>(null);

  const columnRefs = createColumnRefs(columns);

  const {
    limit,
    pagination,
    page,
    totalPages,
    isLoading,
    pageData,
    onChangePage,
  } = usePagination({
    filter,
    data: sortedData,
    limit: 10,
    isServerSide,
    fetchDataOnPagination,
  });
  const { setResizeIndex } = useOnResizeTable({
    table: tableRef,
    columns: columnRefs,
  });

  const { selectedRows, onSelect } = useOnSelect<DataType>();

  const handleOnSort = (column: string, type: string) => {
    if (type === "default") {
      removeSort();
      setSortedData(data || []);
      return;
    }
    addSort(column, type);
    if (type === "asc") setSortedData(sortAsc(sortedData, column));
    if (type === "desc") setSortedData(sortDesc(sortedData, column));
  };

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
                  onSort={handleOnSort}
                  sort={filter.sort || { isSort: false }}
                  setActiveIndexOnResize={handleSetActiveIndexOnResize}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? Array(limit || 10)
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
                    onClick={(event: React.MouseEvent<HTMLTableRowElement>) =>
                      onSelect(event, item)
                    }
                    onContextMenu={(
                      event: React.MouseEvent<HTMLTableRowElement>
                    ) => handleOnContextMenu(event, item)}
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
