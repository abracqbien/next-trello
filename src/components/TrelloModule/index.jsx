import React, { Children, useEffect, useState } from "react"
import PropTypes from "prop-types"

// Components
import ConfirmationModal from "Components/UiKit/Modals/ConfirmationModal"
import CardItem from "Components/TrelloModule/components/CardItem"
import AddList from "Components/TrelloModule/components/AddList"
import AddCard from "Components/TrelloModule/components/AddCard"

// Styles
import {
  ColumnContainer,
  MainContainer,
} from "Components/TrelloModule/index.style"

const TrelloModule = ({
  onRemoveSuccessCode,
  onRemoveWarningCode,
  onDeleteList,
  onPostList,
  onPostCard,
  // Others props
  currentUser,
  successCode,
  warningCode,
  failCode,
  columns,
  cards,
}) => {
  const [confirmDelete, setConfirmeDelete] = useState(false)
  const [workColumn, setWorkColumn] = useState({})

  useEffect(() => {
    if (warningCode !== "")
      setTimeout(() => {
        onRemoveWarningCode()
      }, 3000)
  }, [warningCode])

  useEffect(() => {
    if (successCode === "SUCCESS_DELETE_LIST") setConfirmeDelete(false)
  }, [successCode])

  const onConfirmDelete = column => {
    setWorkColumn(column)
    setConfirmeDelete(true)
  }

  const onCloseConfirmDelete = () => {
    setConfirmeDelete(false)
  }

  const onSubmitDeleteLise = () => {
    onDeleteList(workColumn)
  }

  return (
    <MainContainer id="trello_container" gridLength={columns?.length}>
      {confirmDelete && (
        <ConfirmationModal
          onClose={onCloseConfirmDelete}
          onSubmit={onSubmitDeleteLise}
          textContent={`Vous allez supprimer la liste nommée ${workColumn?.title}`}
        />
      )}
      {Children.toArray(
        columns?.map((column, index) => {
          const columnCards = cards?.filter(
            card => card?.columnId === column?.id
          )

          return (
            <ColumnContainer isFirstItem={index === 0} withMargin>
              <div style={{ display: "flex" }}>
                <div className="column_title">{column?.title}</div>
                <div
                  className="column_delete"
                  onClick={() => onConfirmDelete(column)}
                >
                  <i className="fas fa-ellipsis-h" />
                </div>
              </div>
              {Children.toArray(
                columnCards?.map(card => {
                  const userFollow = card?.userFollowIds?.filter(
                    user => user === currentUser?.USER_ID
                  )

                  return <CardItem userFollow={userFollow} {...card} />
                })
              )}
              <AddCard
                onRemoveSuccessCode={onRemoveSuccessCode}
                onPostCard={onPostCard}
                successCode={successCode}
                warningCode={warningCode}
                column={column}
              />
            </ColumnContainer>
          )
        })
      )}
      <AddList
        onRemoveSuccessCode={onRemoveSuccessCode}
        onPostList={onPostList}
        successCode={successCode}
        warningCode={warningCode}
      />
    </MainContainer>
  )
}

TrelloModule.propTypes = {
  onRemoveSuccessCode: PropTypes.func,
  onRemoveWarningCode: PropTypes.func,
  onDeleteList: PropTypes.func,
  onPostList: PropTypes.func,
  onPostCard: PropTypes.func,
  columnLoading: PropTypes.bool,
  currentUser: PropTypes.object,
  cardLoading: PropTypes.bool,
  successCode: PropTypes.string,
  warningCode: PropTypes.string,
  failCode: PropTypes.string,
  isTablet: PropTypes.bool,
  isMobile: PropTypes.bool,
  columns: PropTypes.array,
  cards: PropTypes.array,
}

TrelloModule.defaultProps = {
  onRemoveSuccessCode: () => {},
  onRemoveWarningCode: () => {},
  onDeleteList: () => {},
  onPostList: () => {},
  onPostCard: () => {},
  columnLoading: false,
  cardLoading: false,
  currentUser: {},
  successCode: "",
  warningCode: "",
  failCode: "",
  isTablet: false,
  isMobile: false,
  columns: [],
  cards: [],
}

export default TrelloModule
