import React, { Children, useEffect, useState } from "react"
import PropTypes from "prop-types"

// Components
import ConfirmationModal from "Components/UiKit/Modals/ConfirmationModal"
import ColumnItem from "Components/TrelloModule/components/ColumnItem"
import AddList from "Components/TrelloModule/components/AddList"

// Styles
import { MainContainer } from "Components/TrelloModule/index.style"

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
    if (successCode === "SUCCESS_DELETE_LIST") {
      onRemoveSuccessCode()
      onClean()
    }
  }, [successCode])

  const onSubmitDeleteList = () => {
    onDeleteList(workColumn)
  }

  const onClean = () => {
    setConfirmeDelete(false)
    setWorkColumn({})
  }

  // Modal confirmation delete
  const onOpenConfirmDelete = column => {
    setWorkColumn(column)
    setConfirmeDelete(true)
  }

  return (
    <MainContainer id="trello_container" gridLength={columns?.length}>
      {confirmDelete && (
        <ConfirmationModal
          onSubmit={onSubmitDeleteList}
          onClose={onClean}
          textContent={`Vous allez supprimer la liste nommée ${workColumn?.title}`}
        />
      )}
      {Children.toArray(
        columns?.map((column, index) => {
          const isFirstItem = index === 0
          const columnCards = cards?.filter(
            card => card?.columnId === column?.id
          )

          return (
            <ColumnItem
              onRemoveSuccessCode={onRemoveSuccessCode}
              onOpenConfirmDelete={onOpenConfirmDelete}
              onPostCard={onPostCard}
              // Others props
              isFirstItem={isFirstItem}
              successCode={successCode}
              warningCode={warningCode}
              columnCards={columnCards}
              currentUser={currentUser}
              column={column}
            />
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
  // Others props
  currentUser: PropTypes.object,
  successCode: PropTypes.string,
  warningCode: PropTypes.string,
  failCode: PropTypes.string,
  columns: PropTypes.array,
  cards: PropTypes.array,
}

TrelloModule.defaultProps = {
  onRemoveSuccessCode: () => {},
  onRemoveWarningCode: () => {},
  onDeleteList: () => {},
  onPostList: () => {},
  onPostCard: () => {},
  // Others props
  currentUser: {},
  successCode: "",
  warningCode: "",
  failCode: "",
  columns: [],
  cards: [],
}

export default TrelloModule
