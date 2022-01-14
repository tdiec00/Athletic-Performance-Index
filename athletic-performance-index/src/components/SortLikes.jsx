import { useState, useEffect } from "react";
import DisplayTop5 from "./DisplayTop5";
import { StyledTop5Container } from "./styles/Top5Container.styled";

const SortLikes = ({ api, name }) => {
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
