import { useState, useEffect } from "react"
import DisplayTopLikes from "./DisplayTopLikes";


const SortLikes = ({ name }) => {
  const [likes, setLikes] = useState({}); 

  let likeArr = [];

  // const sortLikes = () => {
  //   likes.map((like) => {
  //     likeArr.push(like.fields.likes)
  //   });
  // };
  // sortLikes();
  // console.log(likeArr);
  useEffect(() => {
    const fetchLikes = async () => {
      let res = await name.get();
      setLikes(res.data.records)
    }
    fetchLikes()
  }, []);

  console.log(likes);

  return (
    <DisplayTopLikes/>
  )
};

export default SortLikes
