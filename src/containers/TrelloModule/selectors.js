import { createSelector } from "reselect"

const trello = state => state.trello

export const selectColumns = createSelector([trello], trello => trello.columns)
export const selectCards = createSelector([trello], trello => trello.cards)

// Code
export const selectSuccessCode = createSelector([trello], trello => trello.successCode)
export const selectWarningCode = createSelector([trello], trello => trello.warningCode)
export const selectFailCode = createSelector([trello], trello => trello.failCode)

// Loaders
export const selectColumnLoading = createSelector([trello], trello => trello.columnLoading)
export const selectCardLoading = createSelector([trello], trello => trello.cardLoading)
