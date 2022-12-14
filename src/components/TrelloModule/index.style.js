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
    line-height: 26px;
    font-weight: 600;
    font-size: 14px;
    padding: 0 8px;
    width: 220px;
    color: #000;
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

  .add_container_buttons {
    display: flex;

    &_first_button {
      width: max-content;
    }
    &_second_button {
      margin: 0 5px;
      width: 40px;
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
      word-break: break-all;
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
  min-width: ${({ width }) => width || "270px"};
  width: ${({ width }) => width || "270px"};
  background-color: #a1a8ab;
  height: max-content;
  border-radius: 3px;
  position: relative;

  ${({ withMargin }) =>
    withMargin &&
    css`
      margin: ${({ isFirstItem }) => (isFirstItem ? "0 5px 0 10px" : "0 5px")};
    `}
`

export const ModalContainer = styled.div`
  background-color: rgb(244, 245, 247);
  color: rgb(49, 49, 49);
  border-radius: 3px;
  padding: 12px 24px;
  position: relative;
  height: 230px;
  width: 770px;

  .modal_header {
    margin: 0 0 20px 0;
    height: 50px;
    width: 100%;

    .title_card {
      align-items: center;
      font-weight: 600;
      font-size: 20px;
      display: flex;
      height: 30px;
    }

    .list_informations {
      align-items: center;
      font-size: 14px;
      display: flex;
      height: 20px;

      .card_icons {
        color: #919191;

        i {
          margin: 5px;
        }
      }
    }
  }

  .modal_body {
    margin-bottom: 20px;
    position: relative;
    display: flex;
    .title {
      margin-bottom: 5px;
      line-height: 32px;
      font-weight: 600;
      font-size: 18px;
    }

    .left_container {
      position: relative;
      flex-grow: 1;

      .description_edit_container {
        background-color: rgba(9, 30, 66, 0.08);
        border-radius: 3px;
        cursor: pointer;
        font-size: 14px;
        height: 50px;
        padding: 8px 12px;
      }

      .description {
        cursor: pointer;
        font-size: 14px;
      }

      .add_container_buttons {
        display: flex;

        &_first_button {
          width: max-content;
        }
        &_second_button {
          margin: 0 5px;
          width: 40px;
        }
      }
    }

    .right_container {
      flex-direction: column;
      padding-left: 20px;
      position: relative;
      min-width: 190px;
      display: flex;

      .follow_container {
        border-width: 0px;
        border-radius: 3px;
        cursor: pointer;
        font-size: 14px;
        margin: 4px 0px;
        padding-left: 12px;
        outline: none;
        line-height: 32px;
        height: 32px;
        background-color: rgba(9, 30, 66, 0.04);
        color: rgb(49, 49, 49);
        align-items: center;
        display: flex;
        padding-right: 4px;
        position: relative;
        text-align: left;

        &:hover {
          background-color: rgba(9, 30, 66, 0.08);
          color: rgb(0, 0, 0);
        }

        .card_icons {
          color: #919191;

          i {
            margin: 0 10px 0 0;
          }
        }

        .check_box {
          background-color: rgb(97, 189, 79);
          justify-content: center;
          align-items: center;
          border-radius: 3px;
          margin-left: auto;
          font-size: 0.8rem;
          display: flex;
          height: 24px;
          width: 24px;
          color: #fff;
        }
      }
    }
  }
`
