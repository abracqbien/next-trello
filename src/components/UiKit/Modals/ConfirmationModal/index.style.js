import styled, { css } from "styled-components"

export const ModalContentContainer = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: 40px;

  .icon_container {
    height: 100%;
  }

  .text_content {
    text-align: center;
    margin: 40px 0;
  }
`

export const ButtonsContainer = styled.div`
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  display: flex;
  width: 100%;
`
