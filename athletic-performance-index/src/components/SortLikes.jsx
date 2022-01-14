import { useState, useEffect } from "react";
import { StyledTop5Container } from "./styles/Top5Container.styled";
import DisplayTop5 from "./DisplayTop5";

const SortLikes = ({ api, name, toggle }) => {
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
    //eslint-disable-next-line
  }, [toggle]);

  const sortLikes = () => {
    likes.forEach((like) => {
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
  console.log(likes);

  return (
 
    <StyledTop5Container>
      <h3>{`Top 5 liked ${name} exercises`}</h3>
      {finalLikeArr.map((like, index) => {
        return (
          <DisplayTop5
            key={index}
            name={like.name}
            likes={like.likes}
          />
        )
      })}
    </StyledTop5Container>
  );
};

export default SortLikes
