import { takeEvery, take, select, call, put } from "redux-saga/effects"

// Actions
import {
  postSuccessList,
  setSuccessCode,
  setWarningCode,
  setFailCode,
} from "Containers/TrelloModule/actions"

// Types
import TrelloActionTypes from "Containers/TrelloModule/types"

function* postList({ payload }) {
  // try {
  //   const response = yield call(request)
  // } catch (error) {
  //   console.error('PostList ERROR | ', error)
  // }

  console.log("payload", payload)

  if (payload?.label !== "") {
    yield put(setWarningCode("LIST_TITLE_EMPTY"))
  } else {
    const responseBack = { type: "success" }

    if (responseBack?.code === "success") {
      yield put(setSuccessCode("SUCCESS_POST_LIST"))
      yield put(postSuccessList(payload))
    } else if (responseBack?.code === "fail") {
      yield put(setFailCode("FAIL_POST_LIST"))
    }
  }
}

// ***************************** //
//              Sagas            //
// ***************************** //
function* trelloSaga() {
  yield takeEvery(TrelloActionTypes.POST_LIST, postList)
}

export default trelloSaga
