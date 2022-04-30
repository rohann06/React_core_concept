import { useState } from "react";


const Tweet = ({ name, message, setPrevTweet, prevTweet }) => {
  //State
  const [like, setLike] = useState(0);

  const deletehandler = () => {
    setPrevTweet(prevTweet.filter((t) => t!== message))
  };

  const likehandler = () => {
    setLike(like + 1);
  };
  
  return (
    <div className="tweets">
      <h4>{name}</h4>
      <p>{message}</p>
      <p>{like}</p>
      <button onClick={deletehandler}>Delete</button>
      <button onClick={likehandler}>Like</button>
    </div>
  );
};

export default Tweet;
