import React, { Children } from "react"
import PropTypes from "prop-types"

// Components
import AddList from "Components/TrelloModule/components/AddList"
import Button from "Components/UiKit/Button"

// Styles
import { ColumnContainer, MainContainer } from "Components/TrelloModule/index.style"

const TrelloModule = ({ onPostList, successCode, warningCode, failCode, columns, cards }) => {
  return (
    <MainContainer id="trello_container" gridLength={columns?.length}>
      {Children.toArray(
        columns?.map((column, index) => {
          const columnCards = cards?.filter(card => card?.columnId === column?.id)

          return (
            <ColumnContainer isFirstItem={index === 0}>
              <div className="column_title">{column?.title}</div>
              {Children.toArray(
                columnCards?.map(card => (
                  <div className="column_card_item">
                    <div className="test">{card?.title}</div>
                  </div>
                ))
              )}
              <Button
                label="Ajouter une autre carte"
                hoverBckgrColor="#D9DCE2"
                icon="fas fa-plus"
                color="#616161"
              />
            </ColumnContainer>
          )
        })
      )}
      <AddList onPostList={onPostList} successCode={successCode} warningCode={warningCode} />
    </MainContainer>
  )
}

TrelloModule.propTypes = {
  onPostList: PropTypes.func,
  columnLoading: PropTypes.bool,
  currentUser: PropTypes.object,
  cardLoading: PropTypes.bool,
  successCode: PropTypes.string,
  warningCode: PropTypes.string,
  failCode: PropTypes.string,
  isTablet: PropTypes.bool,
  isMobile: PropTypes.bool,
  columns: PropTypes.array,
  cards: PropTypes.array,
}

TrelloModule.defaultProps = {
  onPostList: () => {},
  columnLoading: false,
  cardLoading: false,
  currentUser: {},
  successCode: "",
  warningCode: "",
  failCode: "",
  isTablet: false,
  isMobile: false,
  columns: [],
  cards: [],
}

export default TrelloModule
