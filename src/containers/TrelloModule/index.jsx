import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

// Components
import TrelloModule from "Components/TrelloModule"

// Actions
import {
  removeSuccessCode,
  deleteList,
  postList,
  postCard,
} from "Containers/TrelloModule/actions"

// Selectors
import { selectCurrentUser } from "Containers/Login/selectors"
import {
  selectColumnLoading,
  selectCardLoading,
  selectSuccessCode,
  selectWarningCode,
  selectFailCode,
  selectColumns,
  selectCards,
} from "Containers/TrelloModule/selectors"

const mapDispatchToProps = dispatch => ({
  onRemoveSuccessCode: () => dispatch(removeSuccessCode()),
  onDeleteList: core => dispatch(deleteList(core)),
  onPostList: core => dispatch(postList(core)),
  onPostCard: core => dispatch(postCard(core)),
})

const mapStateToProps = createStructuredSelector({
  columnLoading: selectColumnLoading,
  cardLoading: selectCardLoading,
  successCode: selectSuccessCode,
  warningCode: selectWarningCode,
  currentUser: selectCurrentUser,
  failCode: selectFailCode,
  columns: selectColumns,
  cards: selectCards,
})

const TrelloModuleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrelloModule)

export default TrelloModuleContainer
