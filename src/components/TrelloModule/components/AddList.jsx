import React, { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import PropTypes from "prop-types"

// Components
import Button from "Components/UiKit/Button"
import Input from "Components/UiKit/Input"

// Styles
import { ColumnContainer, ColumnAdd } from "Components/TrelloModule/index.style"

const AddList = ({
  onRemoveSuccessCode,
  onPostList,
  successCode,
  warningCode,
}) => {
  const [workingList, setWorkingList] = useState("")
  const [atWork, setAtWork] = useState(false)

  useEffect(() => {
    if (successCode === "SUCCESS_POST_LIST") {
      onRemoveSuccessCode()
      onClean()
    }
  }, [successCode])

  const onSubmitList = () => {
    onPostList({
      id: uuidv4(),
      title: workingList,
      cardsIds: [],
    })
  }

  const onClean = () => {
    setWorkingList("")
    setAtWork(false)
  }

  return atWork ? (
    <ColumnContainer withMargin>
      <Input
        onChange={({ target }) => setWorkingList(target.value)}
        placeholder="Saisissez le titre de la liste..."
        error={warningCode !== ""}
        value={workingList}
        bckgrColor="#FFF"
        height="40px"
      />
      {warningCode !== "" && (
        <div className="warning_message">
          Un titre doit être défini pour pouvoir créer la liste
        </div>
      )}
      <div style={{ display: "flex" }}>
        <div style={{ width: "125px" }}>
          <Button
            onClick={onSubmitList}
            label="Ajouter une liste"
            hoverBckgrColor="#61BD4F"
            bckgrColor="#5aac44"
          />
        </div>
        <div style={{ width: "40px", margin: "0 5px" }}>
          <Button
            onClick={onClean}
            hoverBckgrColor="#F4F5F7"
            bckgrColor="#EBECF0"
            icon="fas fa-times"
            color="#919191"
            label=""
          />
        </div>
      </div>
    </ColumnContainer>
  ) : (
    <ColumnAdd withMargin>
      <Button
        onClick={() => setAtWork(true)}
        label="Ajouter une autre liste"
        hoverBckgrColor="#ABB1B4"
        bckgrColor="#A1A8AB"
        icon="fas fa-plus"
        height="40px"
        color="#FFF"
      />
    </ColumnAdd>
  )
}

AddList.propTypes = {
  onRemoveSuccessCode: PropTypes.func,
  onPostList: PropTypes.func,
  successCode: PropTypes.string,
  warningCode: PropTypes.string,
}

AddList.defaultProps = {
  onRemoveSuccessCode: () => {},
  onPostList: () => {},
  successCode: "",
  warningCode: "",
}

export default AddList
