import { all } from "redux-saga/effects"

// Sagas
import trelloSaga from "Containers/TrelloModule/saga"

export default function* rootSaga() {
  yield all([trelloSaga()])
}
