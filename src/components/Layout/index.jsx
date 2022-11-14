import React, { cloneElement } from "react"
import PropTypes from "prop-types"

// Components
import Header from "Components/Layout/components/Header"

// Hooks
import { useMedia } from "Hooks/useMediaQuery"

// Style
import { LayoutContainer, BodyContainer } from "Components/Layout/index.style"

const Layout = ({ children }) => {
  const { isTablet, isMobile } = useMedia()

  return (
    <LayoutContainer id="layout_container">
      <Header />
      <BodyContainer>
        {cloneElement(children, {
          isTablet,
          isMobile,
        })}
      </BodyContainer>
    </LayoutContainer>
  )
}

Layout.propTypes = {}

Layout.defaultProps = {}

export default Layout
