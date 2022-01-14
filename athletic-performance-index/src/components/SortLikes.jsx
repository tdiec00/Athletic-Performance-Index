import { useState, useEffect } from "react";
import DiplayTop5 from "./DiplayTop5";


const SortLikes = ({ api }) => {
  const [likes, setLikes] = useState([]);

  let likeArr = [];
  let sortedLikeArr = [];
  let finalLikeArr = [];

  useEffect(() => {
    const fetchLikes = async () => {
      let res = await api.get();
      setLikes(res.data.records)
    }
    fetchLikes();
  }, [api]);


   


  const sortLikes = () => {
    likes.map((like) => {
      likeArr.push({
        name: like.fields.name,
        likes: like.fields.likes,
      });
    });
  };
  sortLikes();

  /// Sort in numerical order in new array
  const sortedLikes = () => {
    return sortedLikeArr = likeArr.sort((a, b) => b.likes - a.likes);
  }
  sortedLikes(likeArr);

  /// Top 5 like array
  const top5Likes = () => {
    finalLikeArr = sortedLikeArr.slice(0, 5);
  }
  top5Likes(sortedLikeArr);
  console.log(finalLikeArr);

  return (
    <div>
      {finalLikeArr.map((like) => {
        return <p>{like.likes}</p>
      })}
    </div>
  );
};

export default SortLikes
