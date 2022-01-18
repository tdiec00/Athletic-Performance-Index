import { useState } from "react"
import NewForm from "./NewForm"
import backApi from '../services/apiConfig/back';
import bicepsApi from '../services/apiConfig/biceps';
import chestApi from '../services/apiConfig/chest';
import legsApi from '../services/apiConfig/legs';
import shouldersApi from '../services/apiConfig/shoulders';
import tricepsApi from '../services/apiConfig/triceps'; 
import { useNavigate } from "react-router-dom";

const default_input = {
  name: "",
  description: "",
  likes: 0,
};

const NewExercise = () => {
  const [input, setInput] = useState(default_input);
  const [bodyPart, setBodyPart] = useState("");
  const navigate = useNavigate();
  let api = "";
  let id = "";

  if (bodyPart.bodyPart === "Back") {
    api = backApi;
    id = "back";
  } else if (bodyPart.bodyPart === "Legs") {
    api = legsApi;
    id = "legs"
  } else if (bodyPart.bodyPart === "Bicep") {
    api = bicepsApi;
    id = "bicep"
  } else if (bodyPart.bodyPart === "Shoulder") {
    api = shouldersApi;
    id = "shoulder"
  } else if (bodyPart.bodyPart === "Chest") {
    api = chestApi;
    id = "chest"
  } else if (bodyPart.bodyPart === "Tricep") {
    api = tricepsApi;
    id = "tricep"
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
    navigate(`/${id}`);
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
