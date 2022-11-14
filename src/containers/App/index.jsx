import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Containers
import LayoutContainer from "Containers/Layout"
import HomeContainer from "Containers/Home"

// Selectors
import { selectCurrentUser, selectRoles } from "Containers/Login/selectors"

// Styles
import { AppContainer } from "Containers/App/index.style"

const App = ({ currentUser, roles }) => {
  const PrivateRoute = ({ component: Component }) => {
    const currentRole = roles.filter(role => role?.id == currentUser?.ROLE_ID)?.[0]

    return (
      <Route
        render={props =>
          currentRole?.permissions?.accessTrello ? (
            <LayoutContainer currentUser={currentUser} currentRole={currentRole}>
              <Component {...props} />
            </LayoutContainer>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
        }
      />
    )
  }

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
          <PrivateRoute exact path="/" component={HomeContainer} />
        </Switch>
      </AppContainer>
    </Router>
  )
}

App.propTypes = {
  currentUser: PropTypes.object,
  roles: PropTypes.array,
}

App.defaultProps = {
  currentUser: {},
  roles: [],
}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  roles: selectRoles,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
