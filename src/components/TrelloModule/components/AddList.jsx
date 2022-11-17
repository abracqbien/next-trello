import React, { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import PropTypes from "prop-types"

// Ui kit
import Button from "Components/UiKit/Button"
import Input from "Components/UiKit/Input"

// Models
import { listModels } from "Components/TrelloModule/models"

// Styles
import { ColumnContainer, ColumnAdd } from "Components/TrelloModule/index.style"

const AddList = ({ onRemoveSuccessCode, onPostList, successCode, warningCode }) => {
  const [workingList, setWorkingList] = useState(listModels())
  const [atWork, setAtWork] = useState(false)

  useEffect(() => {
    if (successCode === "SUCCESS_POST_LIST") {
      onRemoveSuccessCode()
      onClean()
    }
  }, [successCode])

  const onSubmitList = () => {
    onPostList(workingList)
  }

  const onChange = ({ target }) => {
    setWorkingList({
      ...workingList,
      title: target.value,
    })
  }

  const onClean = () => {
    setWorkingList(listModels())
    setAtWork(false)
  }

  return atWork ? (
    <ColumnContainer withMargin>
      <Input
        onChange={e => onChange(e)}
        errorText="Un titre doit être défini pour pouvoir créer la liste"
        error={warningCode == `LIST_TITLE_EMPTY_${workingList?.id}`}
        placeholder="Saisissez le titre de la liste..."
        value={workingList?.title}
        bckgrColor="#FFF"
        height="40px"
      />
      <div className="add_container_buttons">
        <div className="add_container_buttons_first_button">
          <Button
            onClick={onSubmitList}
            label="Ajouter une liste"
            hoverBckgrColor="#61BD4F"
            bckgrColor="#5aac44"
          />
        </div>
        <div className="add_container_buttons_second_button">
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
