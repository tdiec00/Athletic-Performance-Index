import { useState } from "react"
import NewForm from "./NewForm"
import backApi from '../services/apiConfig/back';
import bicepsApi from '../services/apiConfig/biceps';
import chestApi from '../services/apiConfig/chest';
import legsApi from '../services/apiConfig/legs';
import shouldersApi from '../services/apiConfig/shoulders';
import tricepsApi from '../services/apiConfig/triceps'; 

const default_input = {
  name: "",
  description: "",
  likes: 0,
};

const NewExercise = () => {
  const [input, setInput] = useState(default_input);
  const [bodyPart, setBodyPart] = useState("");
  let api = "";

  if (bodyPart.bodyPart === "Back") {
    api = backApi;
  } else if (bodyPart.bodyPart === "Legs") {
    api = legsApi;
  } else if (bodyPart.bodyPart === "Bicep") {
    api = bicepsApi;
  } else if (bodyPart.bodyPart === "Shoulder") {
    api = shouldersApi;
  } else if (bodyPart.bodyPart === "Chest") {
    api = chestApi;
  } else if (bodyPart.bodyPart === "Tricep") {
    api = tricepsApi;
  } else {

  }
   
  const handleInput = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const handleBodyInput = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    setBodyPart((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (bodyPart.bodyPart === undefined) {
      alert("Please choose a body part");
    }
    const fields = input;
    await api.post("/", { fields });
    setInput(default_input);
  }

  return (
    <div>
      <NewForm
        input={input}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        setBodyPart={setBodyPart}
        handleBodyInput={handleBodyInput}
      />
    </div>
  );
};
export default NewExercise
