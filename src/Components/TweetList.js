import Tweet from "./Tweet";
const name = 'Rohan Ahire';
const TweetList = ({prevTweet, setPrevTweet}) => {
    return ( 
        <div className="tweetList">
            {prevTweet.map((tweet) => <Tweet name={name} message={tweet} setPrevTweet={setPrevTweet} prevTweet={prevTweet} /> )}
            {/* <Tweet name={name} prevTweet={prevTweet}/> */}
        </div>
     );
}
 
export default TweetList;