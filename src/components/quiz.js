import React, {useEffect, useState} from 'react'
import './quiz.css'


export default function Quiz ({data, SetStopTime, questionNumber, setQuestionNumber}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [clickedAnswer, setClickedAnswer]= useState('answer');


useEffect (()=> {setQuestion(data[questionNumber-1]);}, [data, questionNumber]);
const delay = (duration, callback) => {setTimeout(() => {callback()}, duration)}
const handleClick = (a) => {
        setSelectedAnswer(a) 
        setClickedAnswer("answer active") 
                              
  delay(2000, () => 
        setClickedAnswer(a.correct ? "answer correct" : "answer wrong"));

  delay 
  (4000, () => {
  if (a.correct) {
    delay(2000, () => {
        setQuestionNumber(prev => prev + 1);
        setSelectedAnswer(null); })}
  else { 
    delay (1000, () => {
    SetStopTime(true);
  })}
});}

return (
  <div className="quiz">
  <div className="questions">
      {question?.question}
  </div>
  <div className="answers">
      {question?.answer.map (a=> (<div className= {selectedAnswer === a ? clickedAnswer : "answer"} 
      onClick= {() => handleClick (a)}> {a.text}</div> ))}
  </div>
  </div>
)}
