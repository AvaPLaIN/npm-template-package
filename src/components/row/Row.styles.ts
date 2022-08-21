import styled from "styled-components";
import { ColumnRefType } from "../table/utils/createColumnRefs";

interface IRowContainerProps {
  selected: boolean;
  [key: string]: any;
}

const RowContainer = styled.tr<IRowContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ selected }) => (selected ? "white" : "black")};

  td {
    ${({ selected }) => selected && `background-color: #42a8fc !important;`}
  }

  .trs {
    grid-column: 1/-1;
    flex: 1;
    width: 100%;
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
  }
`;

export default RowContainer;
