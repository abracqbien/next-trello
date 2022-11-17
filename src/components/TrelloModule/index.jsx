import React, { Children, useEffect } from "react"
import PropTypes from "prop-types"

// Components
import ModalWorkCard from "Components/TrelloModule/components/ModalWorkCard"
import ColumnItem from "Components/TrelloModule/components/ColumnItem"
import AddList from "Components/TrelloModule/components/AddList"

// Ui kit
import ConfirmationModal from "Components/UiKit/Modals/ConfirmationModal"

// Utils
import { useList, useCard } from "Components/TrelloModule/utils"

// Styles
import { MainContainer } from "Components/TrelloModule/index.style"

const TrelloModule = ({
  onRemoveSuccessCode,
  onRemoveWarningCode,
  onDeleteList,
  onDeleteCard,
  onPatchCard,
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
  useEffect(() => {
    if (warningCode !== "")
      setTimeout(() => {
        onRemoveWarningCode()
      }, 3000)
  }, [warningCode])

  useEffect(() => {
    if (successCode === "SUCCESS_DELETE_LIST") {
      onRemoveSuccessCode()
      onCleanDeleteList()
    }
    if (successCode === "SUCCESS_DELETE_CARD") {
      onRemoveSuccessCode()
      onCleanDeleteCard()
    }
  }, [successCode])

  const {
    onOpenConfirmDeleteList,
    onSubmitDeleteList,
    onCleanDeleteList,
    setWorkColumn,
    confirmDeleteList,
    workColumn,
  } = useList(onDeleteList)

  const {
    onOpenConfirmDeleteCard,
    onSubmitDeleteCard,
    onCleanDeleteCard,
    onOpenWorkCard,
    setWorkCard,
    confirmDeleteCard,
    modalWorkCard,
    workCard,
  } = useCard(onDeleteCard, setWorkColumn, cards)

  return (
    <MainContainer id="trello_container">
      {confirmDeleteList && (
        <ConfirmationModal
          onSubmit={onSubmitDeleteList}
          onClose={onCleanDeleteList}
          textContent={`Vous allez supprimer la liste nommée ${workColumn?.title}`}
        />
      )}
      {modalWorkCard && (
        <ModalWorkCard
          onOpenConfirmDeleteCard={onOpenConfirmDeleteCard}
          onSubmitDeleteCard={onSubmitDeleteCard}
          onCleanDeleteCard={onCleanDeleteCard}
          onPatchCard={onPatchCard}
          setWorkCard={setWorkCard}
          // Others props
          confirmDeleteCard={confirmDeleteCard}
          warningCode={warningCode}
          currentUser={currentUser}
          workCard={workCard}
          column={workColumn}
        />
      )}
      {Children.toArray(
        columns?.map((column, index) => {
          const isFirstItem = index === 0
          const columnCards = cards?.filter(card => card?.columnId === column?.id)

          return (
            <ColumnItem
              onOpenConfirmDeleteList={onOpenConfirmDeleteList}
              onRemoveSuccessCode={onRemoveSuccessCode}
              onOpenWorkCard={onOpenWorkCard}
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
  onDeleteCard: PropTypes.func,
  onPatchCard: PropTypes.func,
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
  onDeleteCard: () => {},
  onPatchCard: () => {},
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
