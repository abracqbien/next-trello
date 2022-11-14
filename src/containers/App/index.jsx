import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Containers
import LayoutContainer from "Containers/Layout"
import HomeContainer from "Containers/Home"

// Styles
import { AppContainer } from "Containers/App/index.style"

const App = ({}) => {
  const PublicRoute = ({ component: Component }) => {
    return (
      <Route
        render={props => (
          <LayoutContainer>
            <Component {...props} />
          </LayoutContainer>
        )}
      />
    )
  }

  return (
    <Router>
      <AppContainer className="app">
        <Switch>
          <PublicRoute exact path="/" component={HomeContainer} />
        </Switch>
      </AppContainer>
    </Router>
  )
}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = createStructuredSelector({})

App.propTypes = {}

App.defaultProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
