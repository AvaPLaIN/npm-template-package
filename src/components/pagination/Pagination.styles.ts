import styled from "styled-components";

const PaginationContainer = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  border: 1px solid #e6e6e6;
  border-right: none;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 10px;
    border: none;
    background: none;
    border-right: 1px solid #e6e6e6;

    &.active-page {
      background-color: #f5f5f5;
    }
  }
`;

export default PaginationContainer;
