import { takeEvery, take, select, call, put } from "redux-saga/effects"

// Actions
import {
  deleteSuccessList,
  postSuccessList,
  postSuccessCard,
  setSuccessCode,
  setWarningCode,
  setFailCode,
} from "Containers/TrelloModule/actions"

// Selectors
import { selectColumns } from "Containers/TrelloModule/selectors"

// Types
import TrelloActionTypes from "Containers/TrelloModule/types"

function* postList({ payload }) {
  // try {
  //   const response = yield call(request)
  // } catch (error) {
  //   console.error('postList ERROR | ', error)
  // }

  if (payload?.title === "") {
    yield put(setWarningCode("LIST_TITLE_EMPTY"))
  } else {
    const responseBack = { type: "success" }

    if (responseBack?.type === "success") {
      yield put(setSuccessCode("SUCCESS_POST_LIST"))
      yield put(postSuccessList(payload))
    } else if (responseBack?.type === "fail") {
      yield put(setFailCode("FAIL_POST_LIST"))
    }
  }
}

function* deleteList({ payload }) {
  // try {
  //   const response = yield call(request)
  // } catch (error) {
  //   console.error('deleteList ERROR | ', error)
  // }

  const columns = yield select(selectColumns)

  yield put(
    deleteSuccessList(columns?.filter(item => item?.id !== payload?.id))
  )
}

function* postCard({ payload }) {
  // try {
  //   const response = yield call(request)
  // } catch (error) {
  //   console.error('postList ERROR | ', error)
  // }

  if (payload?.title === "") {
    yield put(setWarningCode("CARD_TITLE_EMPTY"))
  } else {
    const responseBack = { type: "success" }

    if (responseBack?.type === "success") {
      yield put(setSuccessCode("SUCCESS_POST_CARD"))
      yield put(postSuccessCard(payload))
    } else if (responseBack?.type === "fail") {
      yield put(setFailCode("FAIL_POST_CARD"))
    }
  }
}

// ***************************** //
//              Sagas            //
// ***************************** //
function* trelloSaga() {
  yield takeEvery(TrelloActionTypes.DELETE_LIST, deleteList)
  yield takeEvery(TrelloActionTypes.POST_LIST, postList)
  yield takeEvery(TrelloActionTypes.POST_CARD, postCard)
}

export default trelloSaga
