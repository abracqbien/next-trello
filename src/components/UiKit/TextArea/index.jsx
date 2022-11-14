import React from "react"
import PropTypes from "prop-types"

// Style
import {
  MainContainer,
  TextAreaKit,
} from "Components/UiKit/TextArea/index.style"

const TextArea = ({
  onChange,
  placeholder,
  bckgrColor,
  height,
  value,
  error,
}) => (
  <MainContainer height={height}>
    <TextAreaKit
      onChange={onChange}
      placeholder={placeholder}
      bckgrColor={bckgrColor}
      error={error}
      value={value}
    />
  </MainContainer>
)

TextArea.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  bckgrColor: PropTypes.string,
  height: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.bool,
}

TextArea.defaultProps = {
  onChange: () => {},
  placeholder: "",
  bckgrColor: "",
  error: false,
  height: "",
  value: "",
}

export default TextArea
