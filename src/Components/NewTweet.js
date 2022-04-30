 

const NewTweet = ({tweet, setTweet, prevTweet, setPrevTweet}) => {

    

    const changeHandler = (e) => {
        setTweet(e.target.value);
    }

    const submitFormHandlre = (e) => {
        e.preventDefault();
        setPrevTweet([...prevTweet, tweet]);
        setTweet('')
    }

    return ( 
        <div className="new-tweet">
           <form onSubmit={submitFormHandlre}>
                <textarea value={tweet} onChange={changeHandler} name="text" cols="50" rows="5" />
                <button>Submit</button>
            </form>
        </div>
        );
}
 
export default NewTweet;    