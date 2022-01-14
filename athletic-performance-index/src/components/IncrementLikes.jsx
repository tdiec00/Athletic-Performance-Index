import { FcLike } from "react-icons/fc";

const IncrementLikes = ({ id, like, name, setToggle }) => {

  const updateLikes = async () => {
    const currentLikeCount = like + 1
    const currentLike = {likes : currentLikeCount}
    const fields = currentLike;
    const res = await name.patch(`${id} `, { fields });
    setToggle((prevToggle) => !prevToggle)
  }
  
  return (
    <button onClick={updateLikes}>
      <FcLike />
    </button>
  );
};

export default IncrementLikes
