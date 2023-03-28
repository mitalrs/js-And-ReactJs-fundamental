import React from 'react';
import {useEffect, useState, useRef} from "react";

function UseRef() {

  const [inputData, setInputData] = useState();
  // const [count, setCount] = useState(0);
   const count = useRef(0);
   const stElement = useRef("");

  const stylebg =()=>{
    stElement.current.style.backgroundColor = "#43A6C6";
  }
   
   
  useEffect(() => {    
    // setCount(count+1)
    count.current = count.current+1;
  });


  return (
    <div className='useRef' ref={stElement}>
      <input type="text" value={inputData} onChange={(e)=>{setInputData(e.target.value)}}/>
      <p>render count: {count.current} </p>
      <button
      onClick={stylebg}
      >bgChange</button>
    </div>
  )
}

export default UseRef;