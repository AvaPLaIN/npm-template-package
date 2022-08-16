import styled from "styled-components";

interface IResizeBarProps {
  resizable: boolean;
}

const ResizeBar = styled.div<IResizeBarProps>`
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

export default ResizeBar;
