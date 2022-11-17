import { useState } from "react"

export const useList = onDeleteList => {
  const [confirmDeleteList, setConfirmeDeleteList] = useState(false)
  const [workColumn, setWorkColumn] = useState({})

  const onSubmitDeleteList = () => {
    onDeleteList(workColumn)
  }
  const onCleanDeleteList = () => {
    setConfirmeDeleteList(false)
    setWorkColumn({})
  }
  const onOpenConfirmDeleteList = column => {
    setWorkColumn(column)
    setConfirmeDeleteList(true)
  }

  return {
    onOpenConfirmDeleteList,
    onSubmitDeleteList,
    onCleanDeleteList,
    setWorkColumn,
    confirmDeleteList,
    workColumn,
  }
}

export const useCard = (onDeleteCard, setWorkColumn, columns) => {
  const [confirmDeleteCard, setConfirmeDeleteCard] = useState(false)
  const [modalWorkCard, setModalWorkCard] = useState(false)
  const [workCard, setWorkCard] = useState({})

  const onSubmitDeleteCard = () => {
    onDeleteCard(workCard)
  }
  const onCleanDeleteCard = () => {
    setConfirmeDeleteCard(false)
    setModalWorkCard(false)
    setWorkColumn({})
    setWorkCard({})
  }
  const onOpenWorkCard = card => {
    const column = columns?.filter(column => column?.id == card?.columnId)?.[0]

    setWorkColumn(column)
    setWorkCard(card)
    setModalWorkCard(true)
  }
  const onOpenConfirmDeleteCard = () => {
    setConfirmeDeleteCard(true)
  }

  return {
    onOpenConfirmDeleteCard,
    onSubmitDeleteCard,
    onCleanDeleteCard,
    onOpenWorkCard,
    setWorkCard,
    confirmDeleteCard,
    modalWorkCard,
    workCard,
  }
}
