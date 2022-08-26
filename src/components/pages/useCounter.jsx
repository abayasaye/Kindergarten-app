import { useState } from "react"

const useCounter = (cc)=>{
    const [counter , setCounter] = useState(cc)
  
    const counterUp = ()=>{
      setCounter(counter + 1 )
    }
  const counterDown = ()=>{
    setCounter(counter - 1)
  }
  const counterReset = ()=>{
    setCounter(counter * 0)
  }
  return {counter ,setCounter, counterUp , counterDown , counterReset}
  }
  export default useCounter