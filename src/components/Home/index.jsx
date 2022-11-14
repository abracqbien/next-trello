import PropTypes from "prop-types"
import React from "react"

// Components
import TrelloModule from "Containers/TrelloModule"
import Button from "Components/UiKit/Button"

// Styles
import {
  HeaderContainer,
  ButtonContainer,
  BodyContainer,
  MainContainer,
} from "Components/Home/index.style"

const Home = ({ currentUser, isTablet, isMobile }) => {
  return (
    <MainContainer id="home_container">
      <HeaderContainer>
        <div className="label">Tableau principal</div>
        <ButtonContainer>
          <Button
            label="Initialiser le jeu de données"
            hoverBckgrColor="#61BD4F"
            bckgrColor="#5aac44"
          />
        </ButtonContainer>
      </HeaderContainer>
      <BodyContainer>
        <TrelloModule />
      </BodyContainer>
    </MainContainer>
  )
}

Home.propTypes = {
  cardLoading: PropTypes.bool,
  isTablet: PropTypes.bool,
  isMobile: PropTypes.bool,
}

Home.defaultProps = {
  currentUser: {},
  isTablet: false,
  isMobile: false,
}

export default Home
