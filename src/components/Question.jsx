import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";

function Question({question,totalQuestions,currentQuestion,currentAnswer,setAnswer}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const questionTimeout = 60;
    const timer = useRef(null);
    const progressBar = useRef(null);
    //const [fadeProp, setFadeProp] = useState({fade: 'fade-in',});

    function gotoNextQuestion() {
        if(timer.current) {
            clearTimeout(timer.current);
        }
        if(currentAnswer===selectedOption) {
            console.log("Selected: " + selectedOption + "/ Answer: " + currentAnswer);
            document.getElementById("indicator").style.visibility = "show";
            console.log(document.getElementById('indicator').style.visibility)
        } else {
            document.getElementById('indicator').style.visibility = "hidden";
        }
        flushSync(()=> {
            setAnswer(selectedOption);
        });
        setSelectedOption(null);    
    }

    useEffect(()=> {
        progressBar.current.classList.remove("active");
        setTimeout(()=> {
            progressBar.current.classList.add("active");
        }, 0);
        timer.current = setTimeout(gotoNextQuestion, questionTimeout*1000);
        return gotoNextQuestion;
    },[question])
    return (
        <div className="question">
            <div className="progress-bar" ref={progressBar}></div>
            <div className="question-count">
                <b>{currentQuestion} </b>
                of
                <b> {totalQuestions}</b>
            </div>
            <div className="main">
                <div className="title">
                    <span>Question:</span>
                    <p>{question.title}</p>
                </div>
                <div className="options">
                    {
                        question.options.map((option,index) => {
                            return (
                                <div 
                                    className={index === selectedOption ? "option active": "option"}
                                    key={index}
                                    onClick={()=>setSelectedOption(index)}
                                >
                                    {option}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="control">
                <button onClick={gotoNextQuestion}>Next</button>
            </div>
        </div>
    );
}

export default Question; 