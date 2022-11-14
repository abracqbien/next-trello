import TrelloActionTypes from "Containers/TrelloModule/types"

export const postList = payload => ({
  type: TrelloActionTypes.POST_LIST,
  payload,
})
export const postSuccessList = payload => ({
  type: TrelloActionTypes.POST_SUCCESS_LIST,
  payload,
})

export const resetData = () => ({
  type: TrelloActionTypes.RESET_DATA,
})

// CODE
export const setSuccessCode = payload => ({
  type: TrelloActionTypes.SET_SUCCESS_CODE,
  payload,
})
export const setWarningCode = payload => ({
  type: TrelloActionTypes.SET_WARNING_CODE,
  payload,
})
export const setFailCode = payload => ({
  type: TrelloActionTypes.SET_FAIL_CODE,
  payload,
})
export const removeSuccessCode = () => ({
  type: TrelloActionTypes.REMOVE_SUCCESS_CODE,
})
export const removeWarningCode = () => ({
  type: TrelloActionTypes.REMOVE_WARNING_CODE,
})
export const removeFailCode = () => ({
  type: TrelloActionTypes.REMOVE_FAIL_CODE,
})
