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
import { StyledH1BodyContainer } from './styles/H1BodyContainer.styled';
import { StyledBodyPartNameContainer } from './styles/BodyPartNameContainer.styled';
import IncrementLikes from './IncrementLikes';
import SortLikes from './SortLikes';
import { StyledTop5AndListContainer } from './styles/Top5AndListContainer.styled';

const DisplayBody = () => {
  const [exercises, setExercises] = useState([]);
  const [toggle, setToggle] = useState(false);

  let { name } = useParams();
  let nameID = "";
  let nameH1 = "";
  
  if (name === "back") {
    name = backApi
    nameID = "back"
    nameH1 = "Back"
  } else if (name === "legs") {
    name = legsApi
    nameID = "legs"
    nameH1 = "Legs"
  } else if (name === "biceps") {
    name = bicepsApi
    nameID = "biceps"
    nameH1 = "Biceps"
  } else if (name === "shoulders") {
    name = shouldersApi
    nameID = "shoulders"
    nameH1 = "Shoulders"
  } else if (name === "chest") {
    name = chestApi
    nameID = "chest"
    nameH1 = "Chest"
  } else if (name === "triceps") {
    name = tricepsApi
    nameID = "triceps"
    nameH1 = "Triceps"
  } else { };

  useEffect(() => {
    const fetchExercises = async () => {
      let res = await name.get();
      setExercises(res.data.records)
    };
    fetchExercises()
  }, [name, toggle]);

  return (
    <div>
      <StyledH1BodyContainer>
        <h1>{`${nameH1} Index`}</h1>
      </StyledH1BodyContainer>
      <StyledTop5AndListContainer>
        <SortLikes api={name} name={nameID} toggle={toggle} />
        <StyledBodyPartPageContainer>
          {exercises.map((exercise, index) => {
            return (
              <StyledBodyPartNameContainer key={index}>
                <StyledDataLink to={`/${nameID}/${exercise?.id}`}>
                  <p>{exercise.fields?.name}</p>
                </StyledDataLink>
                <IncrementLikes
                  id={exercise.id}
                  like={exercise.fields?.likes}
                  name={name}
                  setToggle={setToggle}
                />
                <p >{exercise.fields?.likes}</p>
              </StyledBodyPartNameContainer>
            );
          })}
        </StyledBodyPartPageContainer>
      </StyledTop5AndListContainer>
    </div>
  );
};

export default DisplayBody
