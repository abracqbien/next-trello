import React from "react"
import PropTypes from "prop-types"

// Style
import { MainContainer, InputKit } from "Components/UiKit/Input/index.style"

const Input = ({ onChange, placeholder, bckgrColor, value, height }) => (
  <MainContainer height={height}>
    <InputKit
      onChange={onChange}
      placeholder={placeholder}
      bckgrColor={bckgrColor}
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
}

Input.defaultProps = {
  onChange: () => {},
  placeholder: "",
  bckgrColor: "",
  height: "",
  value: "",
}

export default Input
