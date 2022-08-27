import styled from "styled-components";

interface IChartOptionsWrapperProps {
  isExpanded: boolean;
}

const ChartOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .expand-options {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.2);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const ChartOptionsWrapper = styled.div<IChartOptionsWrapperProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ isExpanded }) => (isExpanded ? "40px" : "0")};
  transition: height 0.3s ease-in;
  overflow: hidden;
`;

export default ChartOptionsContainer;
