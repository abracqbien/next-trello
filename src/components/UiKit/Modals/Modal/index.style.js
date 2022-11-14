import styled, { keyframes, css } from "styled-components"

const scaleUpCenter = keyframes`
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`

export const MainContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: opacity(0.5);
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  position: fixed;
  color: #000;
  z-index: 1000;
  display: flex;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;

  .popUpContainer {
    box-shadow: 0px 0px 1rem #333;
    background-color: #fff;
    flex-direction: column;
    border-radius: 3px;
    display: flex;
    z-index: 1001;
  }

  .scale-up-center {
    -webkit-animation: ${scaleUpCenter} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: ${scaleUpCenter} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
`
