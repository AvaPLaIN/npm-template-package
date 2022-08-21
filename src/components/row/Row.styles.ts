import styled from "styled-components";

interface IRowContainerProps {
  selected: boolean;
  [key: string]: any;
}

const RowContainer = styled.tr<IRowContainerProps>`
  color: ${({ selected }) => (selected ? "white" : "black")};

  td {
    ${({ selected }) => selected && `background-color: #42a8fc !important;`}
  }
`;

export default RowContainer;
