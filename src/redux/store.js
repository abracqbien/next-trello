import { createStore, applyMiddleware, compose } from "redux"

// Reducer
import { persistStore } from "redux-persist"
import persistReducer from "Redux/root-reducers"

// Saga
import createSagaMiddleware from "redux-saga"
import rootSaga from "Redux/root-saga"

const sagaMiddleware = createSagaMiddleware()

// Compose
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

// Middlewares
const middlewares = [sagaMiddleware]
const enhancers = composeEnhancers(applyMiddleware(...middlewares))

// Store
export default (initialState = {}) => {
  let store = createStore(persistReducer, initialState, enhancers)
  let persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
