import { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";

const default_input = {
  name: "",
  description: "",
  likes: 0,
};



const IncrementLikes = ({id, like, name}) => {
  const [newLike, setNewLike] = useState(0);
  const [input, setInput] = useState(default_input);
  const [currentId, setCurrentId] = useState("");
 
  let currentLikes = newLike;
  
  const idHandler = () => {
    setCurrentId(id);
    setNewLike(like);
  }
  console.log(newLike);
  useEffect(() => {
    const fetchLikes = async () => {
      let fields = input;
      const res = await name.patch( `${id} `, { fields });
      setInput(default_input);
    }
    fetchLikes()
  }, [])
  



  return (
    <form onClick={idHandler}>
      <button>
        <FcLike />
      </button>
    </form>
  );
}

export default IncrementLikes
