import TrelloActionTypes from "Containers/TrelloModule/types"

const INITIAL_STATE = {
  columns: [
    {
      id: 1,
      title: "My first list",
      cardsIds: [1, 2, 3],
    },
    {
      id: 2,
      title: "My second list",
      cardsIds: [4],
    },
  ],
  cards: [
    {
      id: 1,
      title: "My first card",
      columnId: 1,
      description: "",
      userFollowIds: [],
    },
    {
      id: 2,
      title: "My second card",
      columnId: 1,
      description: "",
      userFollowIds: [],
    },
    {
      id: 3,
      title: "Followed card",
      columnId: 1,
      description: "",
      userFollowIds: [1],
    },
    {
      id: 4,
      title: "Followed card with description",
      columnId: 2,
      description: "My first description",
      userFollowIds: [1],
    },
  ],
  columnLoading: false,
  cardLoading: false,
  successCode: "",
  warningCode: "",
  failCode: "",
}

const trelloReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TrelloActionTypes.POST_SUCCESS_LIST:
      return {
        ...state,
        columns: [...state.columns, payload],
      }
    case TrelloActionTypes.SET_SUCCESS_CODE:
      return {
        ...state,
        successCode: payload,
      }
    case TrelloActionTypes.SET_WARNING_CODE:
      return {
        ...state,
        warningCode: payload,
      }
    case TrelloActionTypes.SET_FAIL_CODE:
      return {
        ...state,
        failCode: payload,
      }

    default:
      return state
  }
}

export default trelloReducer
