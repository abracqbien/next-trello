import PropTypes from "prop-types"
import React from "react"

// Assets
import HeaderIcon from "Images/header_trello_icon"

// Style
import { HeaderContainer } from "Components/Layout/index.style"

const Header = () => {
  return (
    <HeaderContainer id="header_container">
      <HeaderIcon />
    </HeaderContainer>
  )
}

export default Header
