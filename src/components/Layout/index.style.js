import styled from "styled-components"

export const LayoutContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .warning_message {
    color: red;
    font-size: 11px;
    margin: 5px 0;
  }
  .warning_message_without_margin {
    color: red;
    font-size: 11px;
    margin: 0 0 5px 0;
  }
`

export const BodyContainer = styled.div`
  background-color: #838c91;
  height: calc(100% - 50px);
  position: relative;
  padding: 5px 0;
  color: #fff;
  width: 100%;
`

export const HeaderContainer = styled.div`
  background-color: #111111;
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  height: 40px;
`
