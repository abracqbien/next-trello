import TrelloActionTypes from "Containers/TrelloModule/types"

// ***** List
export const postList = payload => ({
  type: TrelloActionTypes.POST_LIST,
  payload,
})
export const postSuccessList = payload => ({
  type: TrelloActionTypes.POST_SUCCESS_LIST,
  payload,
})
export const deleteList = payload => ({
  type: TrelloActionTypes.DELETE_LIST,
  payload,
})
export const deleteSuccessList = payload => ({
  type: TrelloActionTypes.DELETE_SUCCESS_LIST,
  payload,
})

// ***** Cards
export const postCard = payload => ({
  type: TrelloActionTypes.POST_CARD,
  payload,
})
export const postSuccessCard = payload => ({
  type: TrelloActionTypes.POST_SUCCESS_CARD,
  payload,
})
export const patchCard = payload => ({
  type: TrelloActionTypes.PATCH_CARD,
  payload,
})
export const patchSuccessCard = payload => ({
  type: TrelloActionTypes.PATCH_SUCCESS_CARD,
  payload,
})
export const deleteCard = payload => ({
  type: TrelloActionTypes.DELETE_CARD,
  payload,
})
export const deleteSuccessCard = payload => ({
  type: TrelloActionTypes.DELETE_SUCCESS_CARD,
  payload,
})

// Others
export const removeSuccessCode = () => ({
  type: TrelloActionTypes.REMOVE_SUCCESS_CODE,
})
export const removeWarningCode = () => ({
  type: TrelloActionTypes.REMOVE_WARNING_CODE,
})
export const removeFailCode = () => ({
  type: TrelloActionTypes.REMOVE_FAIL_CODE,
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
export const resetData = () => ({
  type: TrelloActionTypes.RESET_DATA,
})
