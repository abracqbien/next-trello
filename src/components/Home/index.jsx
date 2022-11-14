import PropTypes from "prop-types"
import React from "react"

// Styles
import { MainContainer } from "Components/Home/index.style"

const Home = ({ isTablet, isMobile, data }) => {
  return (
    <MainContainer id="home_container">
      <div>Home</div>
    </MainContainer>
  )
}

Home.propTypes = {
  isTablet: PropTypes.bool,
  isMobile: PropTypes.bool,
  data: PropTypes.array,
}

Home.defaultProps = {
  isTablet: false,
  isMobile: false,
  data: [],
}

export default Home
