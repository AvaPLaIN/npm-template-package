import styled from "styled-components";

const ColumnMenuContainer = styled.div`
  z-index: 2;
  position: absolute;
  border-radius: 0.3rem;
  top: 40px;
  right: 10px;
  background-color: #ebe9e6;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .filter-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid black;

    .add-filter-button {
      border: none;
      background-color: transparent;
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .clear-column-filters-button {
      border: none;
      background-color: transparent;
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .filter-selector {
      min-width: 17rem;
      flex: 1;
    }
  }

  .active-filters {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    .filter-label {
      text-align: right;
      width: 6rem;
      font-size: 12px;
    }

    .filter-item {
      width: 100%;
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
      gap: 1rem;

      &:hover {
        .delete-filter {
          opacity: 1;
        }
      }

      .delete-filter {
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        opacity: 0;
        color: red;
        border: none;
        background-color: transparent;
        font-size: 1.4rem;
      }
    }
  }
`;

export default ColumnMenuContainer;
