import React, {useState} from 'react'

const QuizeQue = () => {
    const [showFinalScore,setFinalScore] = useState(false);
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [score, setscore] = useState(0);
   
    const ques = [
        {
            text:"Which of the following acts as the input of a class-based component?",
            options:[
                {id:0,text:"Class",isCorrect:true},
                {id:1,text:"Factory",isCorrect:false},
                {id:2,text:"Render",isCorrect:false},
                {id:3,text:"Props",isCorrect:true},
            ]
        },
        {
            text:"Which of the following is used in React.js to increase performance?",
            options:[
                {id:0,text:"Original DOM",isCorrect:false},
                {id:1,text:"Virtual DOM",isCorrect:true},
                {id:2,text:"Both A and B",isCorrect:false},
                {id:3,text:"None of the above.",isCorrect:false},
            ]
        },
        {
            text:" Which of the following keyword is used to create a class inheritance?",
            options:[
                {id:0,text:"Create",isCorrect:false},
                {id:1,text:"Inherits",isCorrect:false},
                {id:2,text:"Extends",isCorrect:true},
                {id:3,text:"This",isCorrect:false},
            ]
        },
        {
            text:"What is a state in React?",
            options:[
                {id:0,text:"A permanent storage.",isCorrect:false},
                {id:1,text:"Internal storage of the component.",isCorrect:true},
                {id:2,text:"External storage of the component.",isCorrect:false},
                {id:3,text:"None of the above.",isCorrect:false},
            ]
        },
        {
            text:"What are the two ways to handle data in React?",
            options:[
                {id:0,text:"State & Props",isCorrect:true},
                {id:1,text:"Services & Components",isCorrect:false},
                {id:2,text:"State & Services",isCorrect:false},
                {id:3,text:"State & Component",isCorrect:false},
            ]
        },
    ]
    const optionClick = (isCorrect) =>{
        if(isCorrect){
            setscore(score+1);
        }
        if(currentQuestion + 1 < ques.length){
            setcurrentQuestion(currentQuestion+1);

        }else{
            setFinalScore(true);
        }
     }
    
     const restartGame = () => {
        setscore(0);
        setcurrentQuestion(0);
        setFinalScore(false);
     } 
    
  return (
    <> 
          <h3>Current Score:{score} </h3>
      { showFinalScore ? (
        <div className="final-result">
        <h1>Final Result</h1>
        <h2>{score} out of {ques.length} correct: {(score/ques.length)*100}%</h2>
        <button onClick={()=> restartGame()}>Restart game </button>
     </div>):(
    <div className="que-card">
       <h2>Ques {currentQuestion+1} to {ques.length} </h2>
       <h3 className="que-text">{ques[currentQuestion].text}</h3>
       <ul>
        {ques[currentQuestion].options.map(option => {
            return (
                <li onClick={()=> optionClick(option.isCorrect)} key={option.id}>{option.text}</li>
            )
        })}
      </ul>
    </div>
     )}
    </>
  )
}

export default QuizeQue