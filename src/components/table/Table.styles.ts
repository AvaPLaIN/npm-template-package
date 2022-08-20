import styled from "styled-components";
import { ColumnRefType } from "./utils/createColumnRefs";

interface TableProps {
  columns: ColumnRefType[];
}

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: normal;
  color: #333;
  height: 100%;
`;

const TableWrapper = styled.table<TableProps>`
  width: 100%;
  height: 100%;
  overflow: auto;
  border-spacing: 0;
  display: grid;
  grid-template-columns: ${({ columns }) => {
    return columns
      .map((column: ColumnRefType) => {
        if (typeof column.width.defaultWidth === "number") {
          return `${column.width.defaultWidth || 200}px`;
        }
        return column.width.defaultWidth;
      })
      .join(" ");
  }};

  thead,
  tbody,
  tr {
    user-select: none;
    display: contents;
  }

  th {
    position: relative;
    font-size: 18px;
    display: flex;
    align-items: center;
    user-select: none;
    align-self: flex-start;

    .info {
      cursor: pointer;
      display: flex;
      gap: 0.5rem;
      flex: 1;
      width: 100%;

      .sort {
        background-color: transparent;
        border: none;
      }
    }

    .filter {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      .filter {
        opacity: 1;
      }
    }
  }

  th,
  td {
    text-align: left;
    padding: 16px 20px;
  }

  td {
    border-top: 1px solid #ccc;
  }

  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
  }
`;

interface IRowProps {
  selected: boolean;
  [key: string]: any;
}

export const Row = styled.tr<IRowProps>`
  color: ${({ selected }) => (selected ? "white" : "black")};

  td {
    background-color: ${({ selected }) => (selected ? "blue" : "transparent")};
  }
`;

export default TableWrapper;
