import styled, { css } from "styled-components"

export const MainContainer = styled.div`
  position: relative;
  overflow-x: auto;
  display: flex;
  height: 100%;
  width: 100%;
`

export const ColumnContainer = styled.div`
  margin: ${({ isFirstItem }) => (isFirstItem ? "0 5px 0 10px" : "0 5px")};
  background-color: #ebecf0;
  height: max-content;
  border-radius: 3px;
  position: relative;
  min-width: 270px;
  padding: 5px;
  width: 270px;

  .column_title {
    color: #000;
    font-size: 14px;
    font-weight: 600;
    padding: 0 8px;
    line-height: 26px;
  }

  .column_card_item {
    border-bottom: 1px solid #b2b8c4;
    background-color: #ffffff;
    border-radius: 3px;
    cursor: pointer;
    margin: 10px 0;
    padding: 7.5px;
    color: #000;

    &:hover {
      background-color: #f4f5f7;
    }
  }
`

export const ColumnAdd = styled.div`
  margin: ${({ isFirstItem }) => (isFirstItem ? "0 5px 0 10px" : "0 5px")};
  background-color: #a1a8ab;
  height: max-content;
  border-radius: 3px;
  position: relative;
  min-width: 270px;
  width: 270px;
`
