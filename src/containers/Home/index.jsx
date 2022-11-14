import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import { compose } from "redux"

// Components
import Home from "Components/Home"

// Actions
import { resetData } from "Containers/TrelloModule/actions"

// Selectors

const mapDispatchToProps = dispatch => ({
  onResetData: () => dispatch(resetData()),
})

const mapStateToProps = createStructuredSelector({})

const HomeContainer = compose(connect(mapStateToProps, mapDispatchToProps))(Home)

export default HomeContainer
