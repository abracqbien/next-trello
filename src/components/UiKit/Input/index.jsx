import React from "react"
import PropTypes from "prop-types"

// Style
import { MainContainer, InputKit } from "Components/UiKit/Input/index.style"

const Input = ({
  onChange,
  placeholder,
  bckgrColor,
  errorText,
  height,
  value,
  error,
}) => (
  <MainContainer height={height}>
    <InputKit
      onChange={onChange}
      placeholder={placeholder}
      bckgrColor={bckgrColor}
      error={error}
      value={value}
    />
    {error && <div className="warning_message">{errorText}</div>}
  </MainContainer>
)

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  bckgrColor: PropTypes.string,
  errorText: PropTypes.string,
  height: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.bool,
}

Input.defaultProps = {
  onChange: () => {},
  placeholder: "",
  bckgrColor: "",
  errorText: "",
  error: false,
  height: "",
  value: "",
}

export default Input
