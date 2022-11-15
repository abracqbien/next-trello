import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

// Components
import TrelloModule from "Components/TrelloModule"

// Actions
import {
  removeSuccessCode,
  removeWarningCode,
  deleteCard,
  deleteList,
  patchCard,
  postList,
  postCard,
} from "Containers/TrelloModule/actions"

// Selectors
import { selectCurrentUser } from "Containers/Login/selectors"
import {
  selectSuccessCode,
  selectWarningCode,
  selectFailCode,
  selectColumns,
  selectCards,
} from "Containers/TrelloModule/selectors"

const mapDispatchToProps = dispatch => ({
  onRemoveSuccessCode: () => dispatch(removeSuccessCode()),
  onRemoveWarningCode: () => dispatch(removeWarningCode()),
  onDeleteList: core => dispatch(deleteList(core)),
  onDeleteCard: core => dispatch(deleteCard(core)),
  onPatchCard: core => dispatch(patchCard(core)),
  onPostList: core => dispatch(postList(core)),
  onPostCard: core => dispatch(postCard(core)),
})

const mapStateToProps = createStructuredSelector({
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
