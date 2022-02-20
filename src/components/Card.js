import React from 'react';
import "./Card.css"

const Card = (props) => {
    console.log(props);
    return (
        <div className="card">

            <div className="text">
                <div className="text1">
                  {props.title}
                 </div>
                <div className="numtext">
                    <div className="text2">
                        {props.num}
                        <span className="text3">{props.percentage}</span>
                        <span className="text4">{props.percentage1}</span>
                        
                    </div>
                </div>
            </div>
            <div className="logo">
                <img className="logoImg" src={props.logo} alt="" />
            </div>
        </div>

    )
}

export default Card