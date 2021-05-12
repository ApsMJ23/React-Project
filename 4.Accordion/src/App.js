import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions,setQuestions] = useState(data)
  return(<main>
      <div className="container">
        <h3>Questions and answers about Login</h3>
      <div>
        {
          questions.map((question)=>{
            return <SingleQuestion key = {question.id} que = {question}/>
          })
        }
      </div>
    </div>
  </main>)
}

export default App;
