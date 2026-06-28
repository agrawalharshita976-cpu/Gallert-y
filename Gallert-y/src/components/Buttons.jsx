import React from 'react'

const Buttons = () => {
  return (
    <div>
       <button className='bg-amber-400 active:scale-95 text-sm
        cursor-pointer text-black rounded px-4 py-2 font-semi-bold'
        onclick={()=>{
          setIndex=(index-1)
        }}  
        >
          Prev</button>
        <button className='bg-amber-400 active:scale-95  text-sm
        cursor-pointer text-black rounded px-4 py-2 font-semibold'
        onclick={()=>{
          setIndex=(index+1)
        }}>Next</button>
    </div>
  )
}

export default Buttons
