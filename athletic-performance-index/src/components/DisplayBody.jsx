import { useState, useEffect } from 'react';
import backApi from '../services/apiConfig/back';
import bicepsApi from '../services/apiConfig/biceps';
import chestApi from '../services/apiConfig/chest';
import legsApi from '../services/apiConfig/legs';
import shouldersApi from '../services/apiConfig/shoulders';
import tricepsApi from '../services/apiConfig/triceps';
import { useParams } from 'react-router-dom';
import { StyledDataLink } from './styles/DataLink.styled';
import { StyledBodyPartPageContainer } from './styles/BodyPartPageContainer.styled';
import { StyledBodyPartDescriptionContainer } from './styles/BodyPartDescriptionContainer.styled';

const DisplayBody = () => {
  const [exercises, setExercises] = useState([]);
  let { name } = useParams();
  let nameID = ""

  if (name === "back") {
    name = backApi
    nameID = "back"
  } else if (name === "legs") {
    name = legsApi
    nameID = "legs"
  } else if (name === "biceps") {
    name = bicepsApi
    nameID = "biceps"
  } else if (name === "shoulders") {
    name = shouldersApi
    nameID = "shoulders"
  } else if (name === "chest") {
    name = chestApi
    nameID = "chest"
  } else if (name === "triceps") {
    name = tricepsApi
    nameID = "triceps"
  } else { };

  
  useEffect(() => {
    const fetchExercises = async () => {
      let res = await name.get();
      setExercises(res.data.records)
    }
    fetchExercises()
  }, [name]);

  return (
    <div>
      <h1>Bicep Index</h1>
      <StyledBodyPartPageContainer>
        {exercises.map((exercise) => {
          return (
            <StyledBodyPartDescriptionContainer>
              <StyledDataLink to={`/${nameID}/${exercise?.id}`}>
                <p>{exercise.fields.name}</p>
                <p>{exercise.fields.description}</p>
              </StyledDataLink>
            </StyledBodyPartDescriptionContainer>
          )
        })}
      </StyledBodyPartPageContainer>
    </div>
  );
};

export default DisplayBody
