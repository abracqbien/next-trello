import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { v4 as uuidv4 } from "uuid"

// Components
import Button from "Components/UiKit/Button"

// Styles
import { ColumnContainer, ColumnAdd } from "Components/TrelloModule/index.style"

const AddList = ({ onPostList, successCode, warningCode }) => {
  const [workingList, setWorkingList] = useState("")
  const [atWork, setAtWork] = useState(false)

  useEffect(() => {
    if (successCode === "SUCCESS_POST_LIST") {
      setWorkingList("")
      setAtWork(false)
    }
  }, [successCode])

  const onSubmitList = () => {
    onPostList({
      id: uuidv4(),
      label: workingList,
    })
  }

  return atWork ? (
    <ColumnContainer>
      {warningCode !== "" && <div>Un titre doit être défini pour pouvoir créer la liste</div>}
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
            onClick={() => setAtWork(false)}
            label=""
            hoverBckgrColor="#F4F5F7"
            bckgrColor="#EBECF0"
            color="#919191"
            icon="fas fa-times"
          />
        </div>
      </div>
    </ColumnContainer>
  ) : (
    <ColumnAdd>
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
  onPostList: PropTypes.func,
  successCode: PropTypes.string,
  warningCode: PropTypes.string,
}

AddList.defaultProps = {
  onPostList: () => {},
  successCode: "",
  warningCode: "",
}

export default AddList
