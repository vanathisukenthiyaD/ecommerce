import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const[number, setNumber] = useState(0)

    const square = useMemo(()=>{
        return number * number
    },[number])
  return (
    <div>
      <h1>
        {square}
      </h1>
      <input type='number' value={number} onChange={(event)=>setNumber(Number(event.target.value))}></input>
    </div>
  )
}

export default Usememo
