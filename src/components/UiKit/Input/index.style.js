import styled from "styled-components"

export const MainContainer = styled.div`
  height: ${({ height }) => height || "30px"};
  position: relative;
  margin: 0 0 5px 0;
  width: 100%;
`

export const InputKit = styled.input`
  transition: 0.25s ease;
  position: relative;
  border-radius: 3px;
  padding: 0 0 0 5px;
  border-width: 0px;
  cursor: pointer;

  /** Fonts */
  line-height: 32px;
  font-size: 14px;

  /** Colors */
  background-color: ${({ bckgrColor }) => bckgrColor || "#EBECF0"};
  color: ${({ color }) => color || "#000"};

  /** Size */
  width: calc(100% - 5px);
  height: 100%;
`
