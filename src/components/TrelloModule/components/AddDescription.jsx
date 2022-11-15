import React from "react"
import PropTypes from "prop-types"

// Ui kit
import TextArea from "Components/UiKit/TextArea"
import Button from "Components/UiKit/Button"

const AddDescription = ({ setAtWork, onChange, onSubmit, workCard }) => (
  <div style={{ width: "100%" }}>
    <TextArea
      onChange={e => onChange(e)}
      placeholder="Ajouter une description plus détaillée..."
      value={workCard?.description}
      bckgrColor="#FFF"
    />
    <div className="add_container_buttons">
      <div className="add_container_buttons_first_button">
        <Button
          onClick={onSubmit}
          label="Enregistrer"
          hoverBckgrColor="#61BD4F"
          bckgrColor="#5aac44"
        />
      </div>
      <div className="add_container_buttons_second_button">
        <Button
          onClick={() => setAtWork(false)}
          hoverBckgrColor="#F4F5F7"
          bckgrColor="#EBECF0"
          icon="fas fa-times"
          color="#919191"
          label=""
        />
      </div>
    </div>
  </div>
)

AddDescription.propTypes = {
  setAtWork: PropTypes.func,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  successCode: PropTypes.string,
  workCard: PropTypes.object,
}

AddDescription.defaultProps = {
  setAtWork: () => {},
  onChange: () => {},
  onSubmit: () => {},
  successCode: "",
  workCard: {},
}

export default AddDescription
