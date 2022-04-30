import TweetList from "./Components/TweetList";
import NewTweet from "./Components/NewTweet";
import { useState } from "react";

function App() {

  //State
  const[tweet, setTweet] = useState("");
  const[prevTweet, setPrevTweet] = useState([]);

  return (
    <div className="App">
      <h1>Simple Tweeter</h1>
      <p>Write a tweet :</p>
      <NewTweet tweet={tweet} setTweet={setTweet} prevTweet={prevTweet} setPrevTweet={setPrevTweet}/>
      <TweetList prevTweet={prevTweet} setPrevTweet={setPrevTweet} />
    </div>
  );
}

export default App;
