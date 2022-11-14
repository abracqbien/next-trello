import TrelloActionTypes from "Containers/TrelloModule/types"

// POST
export const postList = payload => ({
  type: TrelloActionTypes.POST_LIST,
  payload,
})
export const postSuccessList = payload => ({
  type: TrelloActionTypes.POST_SUCCESS_LIST,
  payload,
})

// DELETE
export const deleteList = payload => ({
  type: TrelloActionTypes.DELETE_LIST,
  payload,
})
export const deleteSuccessList = payload => ({
  type: TrelloActionTypes.DELETE_SUCCESS_LIST,
  payload,
})

// Others
export const resetData = () => ({
  type: TrelloActionTypes.RESET_DATA,
})
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
