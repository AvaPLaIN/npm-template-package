import styled from "styled-components";

const ColumnMenuContainer = styled.div`
  z-index: 2;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ebe9e6;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  .filter-header {
    display: flex;
    align-items: center;
    gap: 1rem;

    .add-filter-button {
    }

    .filter-selector {
      flex: 1;
    }
  }

  .active-filters {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    .filter-item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;

export default ColumnMenuContainer;
