import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import backApi from '../services/apiConfig/back';
import bicepsApi from '../services/apiConfig/biceps';
import chestApi from '../services/apiConfig/chest';
import legsApi from '../services/apiConfig/legs';
import shouldersApi from '../services/apiConfig/shoulders';
import tricepsApi from '../services/apiConfig/triceps';
import { StyledDescriptionImage } from "./styles/DescriptionImage.styled";
import { StyledDescriptionTextContainer } from "./styles/DescriptionTextContainer.styled";

const DisplayDescription = () => {
  const [exerciseData, setExerciseData] = useState({});
  let { name, id } = useParams();

  if (name === "back") {
    name = backApi
  } else if (name === "legs") {
    name = legsApi
  } else if (name === "biceps") {
    name = bicepsApi
  } else if (name === "shoulders") {
    name = shouldersApi
  } else if (name === "chest") {
    name = chestApi
  } else if (name === "triceps") {
    name = tricepsApi
  } else {};
  

  useEffect(() => {
    const fetchExercises = async () => {
      let res = await name.get(id);
      setExerciseData(res.data)
    }
    fetchExercises()
  }, [name, id]);

  return (
    <>
      <div>
        <StyledDescriptionTextContainer>
          <p>{exerciseData.fields?.name}</p>
          <p>{exerciseData.fields?.description}</p>
        </StyledDescriptionTextContainer>
      </div>
        <StyledDescriptionImage></StyledDescriptionImage>
    </>
  );
};

export default DisplayDescription
