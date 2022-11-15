import React, { Children } from "react"
import PropTypes from "prop-types"
import { orderBy } from "lodash"

// Components
import CardItem from "Components/TrelloModule/components/CardItem"
import AddCard from "Components/TrelloModule/components/AddCard"

// Styles
import { ColumnContainer } from "Components/TrelloModule/index.style"

const ColumnItem = ({
  onOpenConfirmDeleteList,
  onRemoveSuccessCode,
  onOpenWorkCard,
  onPostCard,
  // Others props
  isFirstItem,
  columnCards,
  successCode,
  warningCode,
  currentUser,
  column,
}) => (
  <ColumnContainer isFirstItem={isFirstItem} withMargin>
    <div style={{ display: "flex" }}>
      <div className="column_title">{column?.title}</div>
      <div
        className="column_delete"
        onClick={() => onOpenConfirmDeleteList(column)}
      >
        <i className="fas fa-ellipsis-h" />
      </div>
    </div>
    {Children.toArray(
      columnCards?.map(card => {
        const userFollow = card?.userFollowIds?.filter(
          user => user === currentUser?.USER_ID
        )

        return (
          <CardItem
            onOpenWorkCard={onOpenWorkCard}
            userFollow={userFollow}
            card={card}
          />
        )
      })
    )}
    <AddCard
      onRemoveSuccessCode={onRemoveSuccessCode}
      onPostCard={onPostCard}
      successCode={successCode}
      warningCode={warningCode}
      column={column}
    />
  </ColumnContainer>
)

ColumnItem.propTypes = {
  onOpenConfirmDeleteList: PropTypes.func,
  onRemoveSuccessCode: PropTypes.func,
  onOpenWorkCard: PropTypes.func,
  onPostCard: PropTypes.func,
  // Others props
  successCode: PropTypes.string,
  warningCode: PropTypes.string,
  currentUser: PropTypes.object,
  columnCards: PropTypes.array,
  isFirstItem: PropTypes.bool,
  column: PropTypes.object,
  title: PropTypes.string,
}

ColumnItem.defaultProps = {
  onOpenConfirmDeleteList: () => {},
  onRemoveSuccessCode: () => {},
  onOpenWorkCard: () => {},
  onPostCard: () => {},
  // Others props
  isFirstItem: false,
  successCode: "",
  warningCode: "",
  columnCards: [],
  currentUser: {},
  column: {},
  title: "",
}

export default ColumnItem
