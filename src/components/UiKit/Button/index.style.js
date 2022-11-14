import styled from "styled-components"

export const MainContainer = styled.div`
  height: ${({ height }) => height || "30px"};
  position: relative;
  width: 100%;
`

export const ButtonKit = styled.button`
  transition: 0.25s ease;
  position: relative;
  border-radius: 3px;
  border-width: 0px;
  cursor: pointer;
  outline: none;

  /** Fonts */
  line-height: 32px;
  font-size: 14px;

  /** Colors */
  background-color: ${({ bckgrColor }) => bckgrColor || "#EBECF0"};
  color: ${({ color }) => color || "#FFF"};

  /** Size */
  padding: 0 12px;
  height: 100%;
  width: 100%;

  &:hover {
    background-color: ${({ hoverBckgrColor }) => hoverBckgrColor || "#EBECF0"};
  }

  i {
    margin: ${({ label }) => (label !== "" ? "0 10px 0 0" : "")};
    font-size: 15px;
  }
`
