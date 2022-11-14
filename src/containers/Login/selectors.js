import { createSelector } from "reselect"

const login = state => state.login

export const selectCurrentUser = createSelector([login], login => login.currentUser)
export const selectRoles = createSelector([login], login => login.roles)
