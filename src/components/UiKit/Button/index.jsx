import React from "react"
import PropTypes from "prop-types"

// Style
import { MainContainer, ButtonKit } from "Components/UiKit/Button/index.style"

const Button = ({
  onClick,
  hoverBckgrColor,
  bckgrColor,
  height,
  label,
  color,
  icon,
}) => (
  <MainContainer height={height}>
    <ButtonKit
      onClick={onClick}
      hoverBckgrColor={hoverBckgrColor}
      bckgrColor={bckgrColor}
      label={label}
      color={color}
    >
      {icon !== "" && <i className={icon} />}
      {label !== "" && label}
    </ButtonKit>
  </MainContainer>
)

Button.propTypes = {
  onClick: PropTypes.func,
  hoverBckgrColor: PropTypes.string,
  bckgrColor: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  hoverBckgrColor: "",
  bckgrColor: "",
  height: "",
  color: "",
  label: "",
  icon: "",
}

export default Button
