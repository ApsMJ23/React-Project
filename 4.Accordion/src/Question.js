import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({que}) => {
  const [showInfo,setShowInfo] = useState(false)
  return( 
      <section className="info">
              <article className="question">
                <header>
                  <h4>{que.title}</h4>
                  <button className="btn" onClick ={()=>setShowInfo(!showInfo)}>
                    {showInfo?<AiOutlineMinus/>:<AiOutlinePlus/>}
                  </button>
                </header>
                {showInfo&&<p>{que.info}</p>}
              </article>
      </section>
        )
    }

export default Question;
