import LoginActionTypes from "Containers/Login/types"

const INITIAL_STATE = {
  currentUser: {
    USER_ID: 1,
    FIRSTNAME: "John",
    LASTNAME: "Doe",
    CREATED_DATE: "14/11/2022",
    ROLE_ID: 1,
  },
  roles: [
    {
      id: 1,
      label: "Administrateur",
      permissions: {
        accessTrello: true,
      },
    },
    {
      id: 2,
      label: "Utilisateur",
      permissions: {
        accessTrello: false,
      },
    },
  ],
}

const loginReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}

export default loginReducer
