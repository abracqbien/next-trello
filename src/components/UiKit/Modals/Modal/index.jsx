import React from "react"
import PropTypes from "prop-types"

// Style
import { MainContainer } from "Components/UiKit/Modals/Modal/index.style"

const Modal = ({ closeModal, children }) => {
  return (
    <MainContainer onClick={closeModal}>
      <div
        onClick={e => e.stopPropagation()}
        className="popUpContainer scale-up-center"
      >
        {children}
      </div>
    </MainContainer>
  )
}

Modal.propTypes = {
  closeModal: PropTypes.func,
}

Modal.defaultProps = {
  closeModal: () => {},
}

export default Modal
