import React from "react"
import PropTypes from "prop-types"

const CardItem = ({ description, userFollow, title }) => (
  <div className="column_card_item">
    <div className="card_title">{title}</div>
    <div className="card_icons">
      {userFollow?.length !== 0 && <i className="far fa-eye" />}
      {description !== "" && <i className="fas fa-align-left" />}
    </div>
  </div>
)

CardItem.propTypes = {
  description: PropTypes.string,
  userFollow: PropTypes.array,
  title: PropTypes.string,
}

CardItem.defaultProps = {
  description: "",
  userFollow: [],
  title: "",
}

export default CardItem
