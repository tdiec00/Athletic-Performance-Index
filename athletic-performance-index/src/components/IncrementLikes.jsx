import { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import backApi from "../services/apiConfig/back";

const default_input = {
  name: "",
  description: "",
  likes: 0,
};

const IncrementLikes = ({ id, like, name }) => {
  const [data, setData] = useState({});
  const [newLike, setNewLike] = useState(0);
  // const [input, setInput] = useState(default_input);
  const [currentId, setCurrentId] = useState("");
  

  const newId = currentId
  
  const idHandler = () => {
    like ++
    setNewLike({likes: like })
    setCurrentId(id);
    updateLikes();
  }
 
  useEffect(() => {
    const fetchData = async () => {
    const res = await name.get(newId);
    setData(res.data);
    }
    fetchData()
  }, [newId]);
  console.log(data);
  console.log(newId);
  console.log(newLike);
  
  const updateLikes = async () => {
    const fields = newLike;
      const res = await name.patch( `${id} `, { fields });
    }
    
 
  



  return (

      <button onClick={idHandler}>
        <FcLike />
      </button>
  );
}

export default IncrementLikes
