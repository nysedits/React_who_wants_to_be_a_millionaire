import React, {useEffect, useState} from 'react'

import './App.css';
import Quiz from './components/quiz'
import data from './components/data'
import Timer from './components/Timer';

 function App() {
  const [questionNumber, setQuestionNumber ] = useState (1)

  const [stopTime, SetStopTime] = useState (false)

  const [earned, SetEarned] = useState ("$0")

  const moneyPyramid = [
    {id:1, amount:"$100"},
    {id:2, amount:"$200"},
    {id:3, amount:"$300"},
    {id:4, amount:"$400"},
    {id:5, amount:"$500"},
    {id:6, amount:"$1000"},
    {id:7, amount:"$2000"},
    {id:8, amount:"$3000"},
    {id:9, amount:"$4000"},
    {id:10, amount:"$5000"},
    {id:11, amount:"$10000"},
    {id:12, amount:"$20000"},
    {id:13, amount:"$30000"},
    {id:14, amount:"$40000"},
    {id:15, amount:"$50000"},
    {id:16, amount:"$100000"},
    {id:17, amount:"$1000000"}
  ]
        .reverse ();

useEffect (() => {
  questionNumber > 1 &&

SetEarned (moneyPyramid.find (m=>m.id === questionNumber - 1).amount)  },
[moneyPyramid, questionNumber])
  
return (
    <div className="app">
    <div className="main">
      {stopTime ? <h1 className='endText'>You Won : {earned}</h1> : 
      (
        <>
        <div className="top">
        <div className="timer">
          <Timer SetStopTime = {SetStopTime}
                 questionNumber = {questionNumber} 
                 setQuestionNumber = {setQuestionNumber}/>
        </div> </div>

      <div className="bottom">  
          <Quiz 
           data = {data}
           SetStopTime = {SetStopTime}
           questionNumber = {questionNumber}
           setQuestionNumber= {setQuestionNumber} /> </div>
        
        </>
      )} </div> 

    <div className="pyramid">
      <ul className="moneyList">{moneyPyramid.map(m=> 
        <li className= { questionNumber === m.id ? "moneyListItem active" : "moneyListItem" }>
        <span className="moneyListAmount">{m.amount}</span>
          </li>)}</ul>
    </div>
      </div>
  );
}


export default App;