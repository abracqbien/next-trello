import React, { cloneElement } from "react"
import PropTypes from "prop-types"

// Components
import Header from "Components/Layout/components/Header"

// Hooks
import { useMedia } from "Hooks/useMediaQuery"

// Style
import { LayoutContainer, BodyContainer } from "Components/Layout/index.style"

const Layout = ({ currentUser, currentRole, children }) => {
  const { isTablet, isMobile } = useMedia()

  return (
    <LayoutContainer id="layout_container">
      <Header />
      <BodyContainer>
        {cloneElement(children, {
          currentUser,
          isTablet,
          isMobile,
        })}
      </BodyContainer>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  currentUser: PropTypes.object,
  currentRole: PropTypes.object,
}

Layout.defaultProps = {
  currentUser: {},
  currentRole: {},
}

export default Layout
