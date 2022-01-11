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
};

const NewExercise = () => {
  const [input, setInput] = useState(default_input);
  const [bodyPart, setBodyPart] = useState("");


  if (bodyPart === "back") {
    // setBodyPart(backApi)
    bodyPart = backApi
  } else if (bodyPart === "legs") {
    // setBodyPart(legsApi)
    bodyPart = legsApi
  } else if (bodyPart=== "biceps") {
    // setBodyPart(bicepsApi)
    bodyPart = bicepsApi
  } else if (bodyPart === "shoulders") {
    // setBodyPart(shouldersApi)
    bodyPart = shouldersApi
  } else if (bodyPart === "chest") {
    // setBodyPart(chestApi)
    bodyPart = chestApi
  } else if (bodyPart === "triceps") {
    // setBodyPart(tricepsApi)
    bodyPart = tricepsApi
  } else {}

  console.log( bodyPart );

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
    const fields = input;
    const res = await bodyPart.post("/", { fields });
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
  )
}

export default NewExercise
