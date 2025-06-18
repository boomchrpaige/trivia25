function JoinScreen({start})  {
    return (
        <div className="join-screen">
            <h2>Office Olympics Trivia: American Cuisine</h2>
            <p>This trivia is meant to make you hungry, all about American cuisine.  
                <br/><br/>You have 60 seconds to answer each question, 
                but remember your time is a factor against your competitors. 
                Good luck and have fun!</p>
            <button onClick={start}>Start</button>
        </div>
    )
    }
export default JoinScreen;