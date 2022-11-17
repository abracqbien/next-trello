import styled, { css } from "styled-components"

export const MainContainer = styled.div`
  height: max-content;
  position: relative;
  margin: 0 0 5px 0;
  width: 100%;
`

export const TextAreaKit = styled.textarea`
  position: relative;
  border-radius: 3px;
  padding: 0 0 0 5px;
  border-width: 0px;
  cursor: pointer;

  /** Fonts */
  line-height: 32px;
  font-size: 12px;

  /** Colors */
  background-color: ${({ bckgrColor }) => bckgrColor || "#EBECF0"};
  color: ${({ color }) => color || "#000"};

  /** Size */
  height: ${({ height }) => height || "75px"};
  width: calc(100% - 5px);

  ${({ error }) =>
    error &&
    css`
      width: calc(100% - 9px);
      border-width: 2px;
      border-color: red;
    `}
`
