import styled from "styled-components";

interface IContextMenuContainerProps {
  mousePosition: { x: number; y: number };
  tableRef: React.RefObject<HTMLTableElement>;
}

const ContextMenuContainer = styled.div<IContextMenuContainerProps>`
  z-index: 2;
  position: absolute;
  top: ${(props) => props.mousePosition.y}px;
  left: ${(props) => {
    if (props.mousePosition.x + 172 > props?.tableRef?.current?.offsetWidth!) {
      return props?.tableRef?.current?.offsetWidth! - 172;
    } else {
      return props.mousePosition.x;
    }
  }}px;
  right: 10px;
  width: 200px;
  background-color: grey;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1px;
    align-items: center;
    background-color: black;
    padding: 1px;

    li {
      color: white;
      background-color: grey;
      width: 100%;
      padding: 10px;
      cursor: pointer;
    }
  }
`;

export default ContextMenuContainer;
