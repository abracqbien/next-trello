import React from "react"
import PropTypes from "prop-types"

const CardItem = ({ onOpenWorkCard, userFollow, card }) => (
  <div className="column_card_item" onClick={() => onOpenWorkCard(card)}>
    <div className="card_title">{card?.title}</div>
    <div className="card_icons">
      {userFollow?.length !== 0 && <i className="far fa-eye" />}
      {card?.description !== "" && <i className="fas fa-align-left" />}
    </div>
  </div>
)

CardItem.propTypes = {
  description: PropTypes.string,
  userFollow: PropTypes.array,
  card: PropTypes.object,
}

CardItem.defaultProps = {
  description: "",
  userFollow: [],
  card: {},
}

export default CardItem
