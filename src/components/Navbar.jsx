import React from 'react'
import "./Navbar.css";

const Navbar = (props) => {
    return (
        <ul>
            <li>{props.firstBev}</li>
            <li>{props.secondBev}</li>
            <li>{props.thirdBev}</li>
        </ul>
    )
}

export default Navbar