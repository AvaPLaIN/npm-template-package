import styled from "styled-components";

interface IResizeBarProps {
  resizable: boolean;
}

const ThContainer = styled.th`
  background-color: white;
  position: sticky;
  top: 0;
  font-size: 18px;
  display: flex;
  align-items: center;
  user-select: none;
  align-self: flex-start;

  .info {
    cursor: pointer;
    display: flex;
    align-items: center;
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
`;

export const ResizeBar = styled.div<IResizeBarProps>`
  display: block;
  position: absolute;
  cursor: ${({ resizable }) => (resizable ? "col-resize" : "default")};
  width: 7px;
  height: 50%;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  border-right: 1px solid transparent;
  border-color: #ccc;
`;

export default ThContainer;
