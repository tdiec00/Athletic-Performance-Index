import { useState, useEffect } from "react"
import DisplayTopLikes from "./DisplayTopLikes";


const SortLikes = ({ name }) => {
  const [likes, setLikes] = useState([]); 
  let likeArr = [];
  let sortedLikeArr = [];
  let finalLikeArr = [];

  useEffect(() => {
    const fetchLikes = async () => {
      let res = await name.get();
      setLikes(res.data.records)
    }
    fetchLikes();
  }, [name]);

  const sortLikes = () => {
    likes.map((like) => {
      likeArr.push(like.fields.likes)
    });
  };
  sortLikes();

  const sortedLikes = () => {
     return sortedLikeArr = likeArr.sort((a, b) => a - b);
  }
  sortedLikes(likeArr);

  const top5Likes = () => {
    finalLikeArr = sortedLikeArr.slice(0, 5);
  }
  top5Likes(sortedLikeArr);

  return (
    finalLikeArr.map((like) => {
      <DisplayTopLikes like={like} />
    })
  );
};

export default SortLikes
