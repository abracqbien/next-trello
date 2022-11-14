import TrelloActionTypes from "Containers/TrelloModule/types"

export const postList = payload => ({
  type: TrelloActionTypes.POST_LIST,
  payload,
})
export const postSuccessList = payload => ({
  type: TrelloActionTypes.POST_SUCCESS_LIST,
  payload,
})

export const setSuccessCode = () => ({
  type: TrelloActionTypes.SET_SUCCESS_CODE,
  payload,
})
export const setWarningCode = () => ({
  type: TrelloActionTypes.SET_WARNING_CODE,
  payload,
})
export const setFailCode = () => ({
  type: TrelloActionTypes.SET_FAIL_CODE,
  payload,
})
