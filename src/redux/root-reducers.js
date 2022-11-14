import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

// Reducers

// Persist
const persistConfig = {
  key: "next-trello",
  storage,
  whitelist: [],
  blacklist: [],
}

const rootReducer = combineReducers({})

export default persistReducer(persistConfig, rootReducer)
