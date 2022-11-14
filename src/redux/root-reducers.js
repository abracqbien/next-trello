import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

// Reducers
import trelloReducer from "Containers/TrelloModule/reducer"
import loginReducer from "Containers/Login/reducer"
import homeReducer from "Containers/Home/reducer"

// Persist
const persistConfig = {
  key: "next-trello",
  storage,
  whitelist: ["trello"],
  blacklist: [],
}

const rootReducer = combineReducers({
  trello: trelloReducer,
  login: loginReducer,
  home: homeReducer,
})

export default persistReducer(persistConfig, rootReducer)
