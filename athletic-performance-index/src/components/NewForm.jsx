import { StyledForm } from "./styles/Form.styled";
import { StyledFormContainer } from "./styles/FormContainer.styled";
import { StyledFormInput } from "./styles/FormInput.styled";
import { StyledFormInputBox1 } from "./styles/FormInputBox1.styled";
import { StyledFormInputBox2 } from "./styles/FormInputBox2.styled";
import { StyledFormInputBox3 } from "./styles/FormInputBox3.styled";
import { StyledSubmitButton } from "./styles/SubmitButton.styled";

const NewForm = ({ input, handleInput, handleSubmit, handleBodyInput }) => {
  const { name, description, bodyPart } = input;

  return (
    <>
      <StyledFormContainer>
        <StyledForm>
          <StyledFormInput>
            <label>Choose a body part</label>
          </StyledFormInput>
          <br />
          <StyledFormInputBox1>
            <select id="bodyPart" value={bodyPart} onChange={handleBodyInput}>
              <option>List of body Parts</option>
              <option>Bicep</option>
              <option>Tricep</option>
              <option>Legs</option>
              <option>Chest</option>
              <option>Shoulder</option>
              <option>Back</option>
            </select>
          </StyledFormInputBox1>
          <br />
          <form onSubmit={handleSubmit}>
            <StyledFormInput>
              <label>Name of exercise</label>
            </StyledFormInput>
            <br />
            <StyledFormInputBox2>
              <input
                id="name"
                value={name}
                onChange={handleInput}
              ></input>
            </StyledFormInputBox2>
            <br />
            <StyledFormInput>
              <label>Description of exercise</label>
            </StyledFormInput>
            <br />
            <StyledFormInputBox3>
              <input
                id="description"
                value={description}
                onChange={handleInput}
              ></input>
            </StyledFormInputBox3>
            <br />
              <StyledSubmitButton>
                <button>Submit</button>
              </StyledSubmitButton>
          </form>
        </StyledForm>
      </StyledFormContainer>
    </>
  );
};
export default NewForm
