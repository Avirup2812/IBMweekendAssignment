import React, { useState } from 'react'

const ControlForm = () => {
    const [info, setInfo] = useState([]);
    const handleClick = (event) => {
        event.preventDefault(); 
        setInfo([...info,{name:event.target.value},{email:event.target.value},{password:event.target.value}]);
    }
    const handleChange = (event) => {
        console.log(event.target.value);
       
    }
    return (
        <>
            <form>
                <label htmlFor="">Name : </label>
                <input type="text" placeholder='Enter Name' onChange={handleChange} value={info.name} />
                <div>
                    <label htmlFor="">Email Address : </label>
                    <input type="email" placeholder='Enter Email Address' onChange={handleChange} value={info.email} />
                </div>
                <div>
                    <label htmlFor="">Password : </label>
                    <input type="password" placeholder='Enter Password' onChange={handleChange} value={info.password} />
                </div>

                <button onClick={handleClick}>Click Me!</button>
            </form>
        </>
    )
}

export default ControlForm