import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import { compose } from "redux"

// Components
import Home from "Components/Home"

// Actions

// Selectors

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = createStructuredSelector({})

const HomeContainer = compose(connect(mapStateToProps, mapDispatchToProps))(Home)

export default HomeContainer
