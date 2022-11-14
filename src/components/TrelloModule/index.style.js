import styled, { css } from "styled-components"

export const MainContainer = styled.div`
  position: relative;
  overflow-x: auto;
  display: flex;
  height: 100%;
  width: 100%;
`

export const ColumnContainer = styled.div`
  min-width: ${({ width }) => width || "270px"};
  width: ${({ width }) => width || "270px"};
  background-color: #ebecf0;
  height: max-content;
  border-radius: 3px;
  position: relative;
  padding: ${({ width }) => !width && "5px"};

  ${({ withMargin }) =>
    withMargin &&
    css`
      margin: ${({ isFirstItem }) => (isFirstItem ? "0 5px 0 10px" : "0 5px")};
    `}

  .column_title {
    color: #000;
    font-size: 14px;
    font-weight: 600;
    padding: 0 8px;
    line-height: 26px;
    width: 220px;
  }

  .column_delete {
    justify-content: center;
    transition: 0.25s ease;
    align-items: center;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    height: 30px;
    right: 10px;
    color: #000;
    width: 30px;
    top: 5px;

    &:hover {
      background-color: #ced1d9;
    }
  }

  .column_card_item {
    border-bottom: 1px solid #b2b8c4;
    background-color: #ffffff;
    transition: 0.25s ease;
    border-radius: 3px;
    cursor: pointer;
    margin: 10px 0;
    padding: 7.5px;
    color: #000;

    &:hover {
      background-color: #f4f5f7;
    }

    .card_title {
    }

    .card_icons {
      color: #919191;

      i {
        margin: 5px;
      }
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
