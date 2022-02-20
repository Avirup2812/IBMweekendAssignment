import React, { useState } from 'react'

const Controlinput = () => {
    const [info,setInfo]=useState("");
    const handleClick=(event)=>{
        event.preventDefault();
    }
    const handleChange=(event)=>{
        console.log(event.target.value);
        setInfo(event.target.value);
    }
  return (
    <>
    <form>
        <label htmlFor="">Name : </label>
        <input type="text" placeholder='Enter Name' onChange={handleChange} value={info}/>
        <button onClick={handleClick}>Click Me!</button>
        </form>
    </>
  )
}

export default Controlinput