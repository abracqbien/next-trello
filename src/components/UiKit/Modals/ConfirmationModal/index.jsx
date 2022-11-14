import React from "react"
import PropTypes from "prop-types"

// Components
import Modal from "Components/UiKit/Modals/Modal"
import Button from "Components/UiKit/Button"

// Assets
import WarningIcon from "Images/icon_warning"

// Style
import {
  ModalContentContainer,
  ButtonsContainer,
} from "Components/UiKit/Modals/ConfirmationModal/index.style"

const ConfirmationModal = ({ onSubmit, onClose, textContent }) => {
  return (
    <Modal
      width={"500px"}
      height={""}
      closeOnClickOut={true}
      closeModal={onClose}
    >
      <ModalContentContainer>
        <div className="icon_container">
          <WarningIcon />
        </div>
        <div className="text_content">{textContent}</div>
        <ButtonsContainer>
          <div style={{ width: "100px", margin: "0 10px 0 0" }}>
            <Button onClick={onSubmit} bckgrColor="green" label="OK" />
          </div>
          <div style={{ width: "100px" }}>
            <Button onClick={onClose} bckgrColor="red" label="Annuler" />
          </div>
        </ButtonsContainer>
      </ModalContentContainer>
    </Modal>
  )
}

ConfirmationModal.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  textContent: PropTypes.string,
}

ConfirmationModal.defaultProps = {
  onSubmit: () => {},
  onClose: () => {},
  textContent: "",
}

export default ConfirmationModal
