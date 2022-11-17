import React, { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import PropTypes from "prop-types"

// Ui kit
import TextArea from "Components/UiKit/TextArea"
import Button from "Components/UiKit/Button"

// Models
import { cardModels } from "Components/TrelloModule/models"

// Styles
import { ColumnContainer, ColumnAdd } from "Components/TrelloModule/index.style"

const AddCard = ({
  onRemoveSuccessCode,
  onPostCard,
  successCode,
  warningCode,
  column,
}) => {
  const [workingCard, setWorkingCard] = useState(cardModels(column?.id))
  const [atWork, setAtWork] = useState(false)

  useEffect(() => {
    if (successCode === "SUCCESS_POST_CARD") {
      onRemoveSuccessCode()
      onClean()
    }
  }, [successCode])

  const onSubmitList = () => {
    onPostCard(workingCard)
  }

  const onChange = ({ target }) => {
    setWorkingCard({
      ...workingCard,
      title: target.value,
    })
  }

  const onClean = () => {
    setWorkingCard(cardModels(column?.id))
    setAtWork(false)
  }

  return atWork ? (
    <ColumnContainer width="100%">
      <TextArea
        onChange={e => onChange(e)}
        errorText="Un titre doit être défini pour pouvoir créer cette carte"
        error={warningCode == `CARD_TITLE_EMPTY_${workingCard.id}`}
        placeholder="Saisissez un titre pour cette carte..."
        value={workingCard?.title}
        bckgrColor="#FFF"
      />
      <div className="add_container_buttons">
        <div className="add_container_buttons_first_button">
          <Button
            onClick={onSubmitList}
            label="Ajouter une carte"
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
    <ColumnAdd>
      <Button
        onClick={() => setAtWork(true)}
        label="Ajouter une autre carte"
        hoverBckgrColor="#D9DCE2"
        icon="fas fa-plus"
        color="#616161"
      />
    </ColumnAdd>
  )
}

AddCard.propTypes = {
  onRemoveSuccessCode: PropTypes.func,
  onPostCard: PropTypes.func,
  successCode: PropTypes.string,
  warningCode: PropTypes.string,
  column: PropTypes.object,
}

AddCard.defaultProps = {
  onRemoveSuccessCode: () => {},
  onPostCard: () => {},
  successCode: "",
  warningCode: "",
  column: {},
}

export default AddCard
