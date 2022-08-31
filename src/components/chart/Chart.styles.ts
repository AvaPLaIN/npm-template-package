import styled from "styled-components";

interface IChartContainerProps {
  isFullSize: boolean;
}

const ChartContainer = styled.div<IChartContainerProps>`
  z-index: 99;
  position: absolute;
  min-height: ${({ isFullSize }) => (isFullSize ? "100%" : "80%")};
  width: ${({ isFullSize }) => (isFullSize ? "100%" : "80%")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .chart-header {
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
    height: 3rem;

    .chart-selection {
      select {
        border: none;
        width: 10rem;
        height: 2.5rem;
        outline: none;
      }
    }

    .controls {
      display: flex;
      align-items: center;
      gap: 1rem;

      button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          font-size: 1.6rem;
        }
      }
    }
  }

  .chart {
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export default ChartContainer;
