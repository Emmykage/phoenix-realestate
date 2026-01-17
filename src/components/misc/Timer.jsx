import React, { useEffect, useRef, useState } from 'react'

const Timer = ({timer, setTimer}) => {
  const Ref = useRef(null)
  // const [timer, setTimer] = useState("00")

  const getTimeRemaining = (e) => {   
    const total = Date.parse(e) - Date.parse(new Date())
    const seconds = Math.floor((total/1000) % 60)
    const minutes = Math.floor((total/1000 /60) % 60)
    const hours = Math.floor((total/1000/60/60) %24)
    return {total, hours, minutes, seconds}
  }
 
  const startTimer = e => {
    let {total, seconds} = getTimeRemaining(e);
    if (total >= 0){
      setTimer(seconds)
    }
  }
    
      const clearTimer = e => {
      setTimer('5')

      if(Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
        startTimer(e)
      }, 1000)
      Ref.current=id
    }
    const getDeadTime = () => {
      let deadline = new Date()
      deadline.setSeconds(deadline.getSeconds() + 5)
      return deadline;
    }
    useEffect(()=> {
      clearTimer(getDeadTime())
    },[])


  return (
    <div>
      <h2 className='text-dark'>{timer}</h2>
      {/* <button onClick={onClickReset}>Reset</button> */}
    </div>
  )      
}
export default Timer