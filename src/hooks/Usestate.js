import React, { useState } from 'react'

const Usestate = () => {
    const[number, setNumber] = useState(1)
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number + 1)}>ADD PRODUCT</button>
    </div>
  )
}

export default Usestate
