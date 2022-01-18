import { FcLike } from "react-icons/fc";

const IncrementLikes = ({ id, like, name, setToggle }) => {

  const updateLikes = async () => {
    const currentLikeCount = like + 1
    const currentLike = {likes : currentLikeCount}
    const fields = currentLike;
    await name.patch(`${id} `, { fields });
    setToggle((prevToggle) => !prevToggle)
  }
  
  return (
    <button onClick={updateLikes} title={`Like this exercise`}>
      <FcLike />
    </button>
  );
};

export default IncrementLikes
