import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

// Components
import Layout from "Components/Layout"

// Actions

// Selectors

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = createStructuredSelector({})

const LayoutContainer = connect(mapStateToProps, mapDispatchToProps)(Layout)

export default LayoutContainer
