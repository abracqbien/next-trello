import React, { Children } from "react"
import PropTypes from "prop-types"

// Components
import AddList from "Components/TrelloModule/components/AddList"
import Button from "Components/UiKit/Button"

// Styles
import { ColumnContainer, MainContainer } from "Components/TrelloModule/index.style"

const TrelloModule = ({
  onPostList,
  currentUser,
  successCode,
  warningCode,
  failCode,
  columns,
  cards,
}) => {
  console.log("currentUser", currentUser)
  return (
    <MainContainer id="trello_container" gridLength={columns?.length}>
      {Children.toArray(
        columns?.map((column, index) => {
          const columnCards = cards?.filter(card => card?.columnId === column?.id)

          return (
            <ColumnContainer isFirstItem={index === 0}>
              <div className="column_title">{column?.title}</div>
              {Children.toArray(
                columnCards?.map(card => {
                  const userFollow = card?.userFollowIds?.filter(
                    user => user === currentUser?.USER_ID
                  )

                  return (
                    <div className="column_card_item">
                      <div className="card_title">{card?.title}</div>
                      <div className="card_icons">
                        {userFollow?.length !== 0 && <i className="far fa-eye" />}
                        {card?.description !== "" && <i class="fas fa-align-left" />}
                      </div>
                    </div>
                  )
                })
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
