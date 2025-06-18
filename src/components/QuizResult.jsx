//import { API } from "aws-amplify";
//import { createNote as createNoteMutation,  } from "../graphql/mutations";

  const now = new Date()  
  const secondsSinceEpoch = Math.round(now.getTime() / 1000)

  /*async function createNote(event, user, beginTime) {
    const data = {
      email: user,
      score: event.percentage,
      time: (beginTime - secondsSinceEpoch),
      version: 3.1,
    };

    const element = document.getElementById('save-btn');
    element.remove();

    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });

  }
*/
function QuizResult({result,retry,signOut,user,beginTime}) {
    return (
        <div className="result-screen">
            <h2>Result: {result.percentage}%</h2>
            <p>Selected {result.correct} correct options out of {result.total} questions.</p>
           
            <button id="save-btn" onClick={()=>createNote(result, user, beginTime)}>Save Score</button>
        </div>
    );
}

export default QuizResult;