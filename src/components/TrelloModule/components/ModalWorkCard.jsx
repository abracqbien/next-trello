import React, { useState } from "react"
import PropTypes from "prop-types"

// Ui kit
import ConfirmationModal from "Components/UiKit/Modals/ConfirmationModal"
import Modal from "Components/UiKit/Modals/Modal"

// Style
import { ModalContainer } from "Components/TrelloModule/index.style"

const ModalWorkCard = ({
  onOpenConfirmDeleteCard,
  onSubmitDeleteCard,
  onCleanDeleteCard,
  onPatchCard,
  setWorkCard,
  // Others props
  confirmDeleteCard,
  currentUser,
  workCard,
  column,
}) => {
  const onSwitch = () => {
    setWorkCard({
      ...workCard,
      userFollowIds: userFollowing
        ? workCard?.userFollowIds?.filter(user => user !== currentUser?.USER_ID)
        : [...workCard?.userFollowIds, currentUser?.USER_ID],
    })
    onPatchCard({
      ...workCard,
      userFollowIds: userFollowing
        ? workCard?.userFollowIds?.filter(user => user !== currentUser?.USER_ID)
        : [...workCard?.userFollowIds, currentUser?.USER_ID],
    })
  }

  const userFollowing = workCard?.userFollowIds?.includes(currentUser?.USER_ID)

  return (
    <Modal onCloseModal={onCleanDeleteCard}>
      {confirmDeleteCard && (
        <ConfirmationModal
          onSubmit={onSubmitDeleteCard}
          onClose={onCleanDeleteCard}
          textContent={`Vous allez supprimer la carte nommée ${workCard?.title}`}
        />
      )}
      <ModalContainer>
        <div className="modal_header">
          <div className="title_card">{workCard?.title}</div>
          <div className="list_informations">
            {`Dans la liste ${column?.title}`}
            <div className="card_icons">
              {userFollowing && <i className="far fa-eye" />}
            </div>
          </div>
        </div>
        <div className="modal_body">
          <div className="left_container">
            <div className="title">Description</div>
            {workCard?.description !== "" ? (
              <div>
                <div className="description">{workCard?.description}</div>
              </div>
            ) : (
              <div>
                <div></div>
              </div>
            )}
          </div>
          <div className="right_container">
            <div className="title">Actions</div>
            <div onClick={onSwitch} className="follow_container">
              <div className="card_icons">
                <i className="far fa-eye" />
              </div>
              Suivre
              {userFollowing && (
                <div className="check_box">
                  <i className="fas fa-check" />
                </div>
              )}
            </div>
            <div onClick={onOpenConfirmDeleteCard} className="follow_container">
              <div className="card_icons">
                <i
                  className="fas fa-minus"
                  style={{ margin: "0 10px 0 2px" }}
                />
              </div>
              Supprimer
            </div>
          </div>
        </div>
      </ModalContainer>
    </Modal>
  )
}

ModalWorkCard.propTypes = {
  onOpenConfirmDeleteCard: PropTypes.func,
  onSubmitDeleteCard: PropTypes.func,
  onCleanDeleteCard: PropTypes.func,
  onPatchCard: PropTypes.func,
  setWorkCard: PropTypes.func,
  // Others props
  confirmDeleteCard: PropTypes.bool,
  currentUser: PropTypes.object,
  workCard: PropTypes.object,
  column: PropTypes.object,
}

ModalWorkCard.defaultProps = {
  onOpenConfirmDeleteCard: () => {},
  onSubmitDeleteCard: () => {},
  onCleanDeleteCard: () => {},
  onPatchCard: () => {},
  setWorkCard: () => {},
  // Others props
  confirmDeleteCard: false,
  currentUser: {},
  workCard: {},
  column: {},
}

export default ModalWorkCard
