import React from "react"
import PropTypes from "prop-types"

// Ui kit
import Modal from "Components/UiKit/Modals/Modal"

// Style
import { ModalContainer } from "Components/TrelloModule/index.style"

const ModalWorkCard = ({
  onCleanDeleteCard,
  userFollowIds,
  currentUser,
  description,
  column,
  title,
}) => (
  <Modal onCloseModal={onCleanDeleteCard}>
    <ModalContainer>
      <div className="modal_header">
        <div className="title_card">{title}</div>
        <div className="list_informations">
          {`Dans la liste ${column?.title}`}
          <div className="card_icons">
            {userFollowIds?.includes(currentUser?.USER_ID) && (
              <i className="far fa-eye" />
            )}
          </div>
        </div>
      </div>
      <div className="modal_body">
        <div className="left_container">
          <div className="title_left_container">Description</div>
          {description !== "" ? (
            <div>
              <div className="description">{description}</div>
            </div>
          ) : (
            <div>
              <div></div>
            </div>
          )}
        </div>
        <div className="right_container"></div>
      </div>
    </ModalContainer>
  </Modal>
)

ModalWorkCard.propTypes = {
  onCleanDeleteCard: PropTypes.func,
  userFollowIds: PropTypes.array,
  currentUser: PropTypes.object,
  description: PropTypes.string,
  column: PropTypes.object,
  title: PropTypes.string,
}

ModalWorkCard.defaultProps = {
  onCleanDeleteCard: () => {},
  userFollowIds: [],
  currentUser: {},
  description: "",
  column: {},
  title: "",
}

export default ModalWorkCard
