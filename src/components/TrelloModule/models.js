import { v4 as uuidv4 } from "uuid"

export const listModels = () => {
  return {
    id: uuidv4(),
    title: "",
    cardsIds: [],
  }
}

export const cardModels = columnId => {
  return {
    id: uuidv4(),
    title: "",
    userFollowIds: [],
    description: "",
    columnId,
  }
}
