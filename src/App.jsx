import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import QuizScreen from "./components/QuizScreen.jsx"
import JoinScreen from "./components/JoinScreen.jsx"
//import { useAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const [count, setCount] = useState(0)

  const [notes, setNotes] = useState([]);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  //const username = (user.attributes.email);
//  const { signOut } = useAuthenticator();

  function getStartTime() {
    const now = new Date()  
    const secondsSinceEpoch = Math.round(now.getTime() / 1000)
    return secondsSinceEpoch
  }

  const variables = {
    filter: {
      version: {
        eq: 15
      },
      score : {
        gt: 90
      }
    }
  };

  const username = "boom";

  return (
    <>
      <Navbar />
      <div className="quiz-container">
        {
          isQuizStarted ? (
            <QuizScreen retry={()=>setIsQuizStarted(false)} user={username} beginTime={getStartTime()}/>
          ) : (
            <JoinScreen start={()=>setIsQuizStarted(true)} />
          ) 
        }
      </div>
      <div className="indicator-container" id="indicator">
        Correct
      </div>
      <div className="logout-container">
        <button onClick={0}>Sign Out</button>
      </div>
    </>
  )
}

export default App
