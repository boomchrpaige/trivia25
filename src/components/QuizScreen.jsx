import {useState} from "react";
import QuestionList_whole from "../data/questions.json";
import Question from "./Question.jsx";
import QuizResult from "./QuizResult.jsx";

var QuestionList = QuestionList_whole.questions;

function QuizScreen({retry,user,beginTime}) {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.length));
    const isQuestionEnd = currentQuestionIndex === QuestionList.length;
    //console.log(beginTime);
    
    function calculateResult() {
        let correct = 0;
        if(!markedAnswers[QuestionList.length-1]){
            markedAnswers[QuestionList.length-1] = "Freebie";
            }
        QuestionList.forEach((question,index) => {
            if(question.correctOptionIndex===markedAnswers[index] || markedAnswers[index]==="Freebie"){
                correct++;
            } 
        });
        return {
            total:QuestionList.length,
            correct:correct,
            percentage:Math.trunc((correct / QuestionList.length) * 100)
        }
    }
    return (
        <div className="quiz-screen">
            {
                isQuestionEnd ? (
                    <><QuizResult
                        result={calculateResult()}
                        retry={retry}
                        signOut={"1"}
                        user={user}
                        beginTime={beginTime} /></>
                ) : (
                    <Question
                        question={QuestionList[currentQuestionIndex]}
                        totalQuestions={QuestionList.length}
                        currentQuestion={currentQuestionIndex+1}
                        currentAnswer={QuestionList[currentQuestionIndex].correctOptionIndex}
                        setAnswer={(index)=>{
                            setMarkedAnswers((arr)=> {
                                let newArr = [...arr];
                                newArr[currentQuestionIndex-1] = index;
                                return newArr;                            
                            });
                        setCurrentQuestionIndex(currentQuestionIndex+1);
                        }}
                        />
                )
            }
        </div>
    );
}

export default QuizScreen;
