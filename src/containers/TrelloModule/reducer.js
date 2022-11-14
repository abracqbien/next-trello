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
    case TrelloActionTypes.POST_SUCCESS_CARD:
      return {
        ...state,
        cards: [...state.cards, payload],
      }
    case TrelloActionTypes.DELETE_SUCCESS_LIST:
      return {
        ...state,
        columns: payload,
      }
    case TrelloActionTypes.SET_SUCCESS_CODE:
      return {
        ...state,
        successCode: payload,
      }
    case TrelloActionTypes.RESET_DATA:
      return INITIAL_STATE
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
    case TrelloActionTypes.REMOVE_SUCCESS_CODE:
      return {
        ...state,
        successCode: "",
      }
    case TrelloActionTypes.REMOVE_WARNING_CODE:
      return {
        ...state,
        warningCode: "",
      }
    case TrelloActionTypes.REMOVE_FAIL_CODE:
      return {
        ...state,
        failCode: "",
      }
    default:
      return state
  }
}

export default trelloReducer
