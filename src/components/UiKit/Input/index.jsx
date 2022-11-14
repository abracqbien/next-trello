import React from "react"
import PropTypes from "prop-types"

// Style
import { MainContainer, InputKit } from "Components/UiKit/Input/index.style"

const Input = ({ onChange, placeholder, bckgrColor, value, error, height }) => (
  <MainContainer height={height}>
    <InputKit
      onChange={onChange}
      placeholder={placeholder}
      bckgrColor={bckgrColor}
      error={error}
      value={value}
    />
  </MainContainer>
)

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  bckgrColor: PropTypes.string,
  height: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.bool,
}

Input.defaultProps = {
  onChange: () => {},
  placeholder: "",
  bckgrColor: "",
  error: false,
  height: "",
  value: "",
}

export default Input
