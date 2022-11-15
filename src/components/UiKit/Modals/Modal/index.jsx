import React from "react"
import PropTypes from "prop-types"

// Style
import { MainContainer } from "Components/UiKit/Modals/Modal/index.style"

const Modal = ({ onCloseModal, children }) => (
  <MainContainer onClick={onCloseModal}>
    <div
      onClick={e => e.stopPropagation()}
      className="popUpContainer scale-up-center"
    >
      {children}
    </div>
  </MainContainer>
)

Modal.propTypes = {
  onCloseModal: PropTypes.func,
}

Modal.defaultProps = {
  onCloseModal: () => {},
}

export default Modal
