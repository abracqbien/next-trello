import styled from "styled-components"

export const MainContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

export const HeaderContainer = styled.div`
  align-items: center;
  padding: 0 0 0 20px;
  position: relative;
  display: flex;
  height: 35px;
  width: 100%;

  .label {
    margin: 0 10px 0 0;
    font-weight: 700;
    font-size: 18px;
  }
`

export const BodyContainer = styled.div`
  height: calc(100% - 35px);
  position: relative;
  padding: 10px 0;
  width: 100%;
`

export const ButtonContainer = styled.div`
  width: max-content;
`
