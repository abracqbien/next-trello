import { takeEvery, take, select, call, put } from "redux-saga/effects"

// Actions
import {
  deleteSuccessCard,
  deleteSuccessList,
  patchSuccessCard,
  postSuccessList,
  postSuccessCard,
  setSuccessCode,
  setWarningCode,
  setFailCode,
} from "Containers/TrelloModule/actions"

// Selectors
import { selectColumns, selectCards } from "Containers/TrelloModule/selectors"

// Types
import TrelloActionTypes from "Containers/TrelloModule/types"

function* postList({ payload }) {
  // try {
  //   const response = yield call(request)
  // } catch (error) {
  //   console.error('postList ERROR | ', error)
  // }

  if (payload?.title === "") {
    yield put(setWarningCode(`LIST_TITLE_EMPTY_${payload?.id}`))
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
  const columns = yield select(selectColumns)

  yield put(setSuccessCode("SUCCESS_DELETE_LIST"))
  yield put(deleteSuccessList(columns?.filter(item => item?.id !== payload?.id)))
}

function* postCard({ payload }) {
  console.log("payload", payload)
  if (payload?.title === "") {
    yield put(setWarningCode(`CARD_TITLE_EMPTY_${payload.id}`))
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

function* patchCard({ payload }) {
  if (payload?.title === "") {
    yield put(setWarningCode("CARD_TITLE_EMPTY"))
  } else {
    const responseBack = { type: "success" }

    if (responseBack?.type === "success") {
      yield put(setSuccessCode("SUCCESS_PATCH_CARD"))
      yield put(patchSuccessCard(payload))
    } else if (responseBack?.type === "fail") {
      yield put(setFailCode("FAIL_PATCH_CARD"))
    }
  }
}

function* deleteCard({ payload }) {
  const cards = yield select(selectCards)

  yield put(setSuccessCode("SUCCESS_DELETE_CARD"))
  yield put(deleteSuccessCard(cards?.filter(item => item?.id !== payload?.id)))
}

// ***************************** //
//              Sagas            //
// ***************************** //
function* trelloSaga() {
  yield takeEvery(TrelloActionTypes.DELETE_LIST, deleteList)
  yield takeEvery(TrelloActionTypes.POST_LIST, postList)
  yield takeEvery(TrelloActionTypes.DELETE_CARD, deleteCard)
  yield takeEvery(TrelloActionTypes.PATCH_CARD, patchCard)
  yield takeEvery(TrelloActionTypes.POST_CARD, postCard)
}

export default trelloSaga
