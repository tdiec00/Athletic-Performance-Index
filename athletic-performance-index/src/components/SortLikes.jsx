import { useState, useEffect } from "react";
import { StyledTop5Container } from "./styles/Top5Container.styled";
import { StyledTop5TextContainer } from "./styles/Top5TextContainer.styled";
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
  }, [toggle]);

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
  console.log(likes);

  return (
 
    <StyledTop5Container>
      <h3>{`Top 5 liked ${name} exercises`}</h3>
      {finalLikeArr.map((like) => {
        return (
          <DisplayTop5
            name={like.name}
            likes={like.likes}
          />
        )
      })}
    </StyledTop5Container>
  );
};

export default SortLikes
