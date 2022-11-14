import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

// Reducers
import homeReducer from "Containers/Home/reducer"

// Persist
const persistConfig = {
  key: "next-trello",
  storage,
  whitelist: [],
  blacklist: [],
}

const rootReducer = combineReducers({
  home: homeReducer,
})

export default persistReducer(persistConfig, rootReducer)
