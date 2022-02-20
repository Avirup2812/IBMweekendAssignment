import React from 'react'
import "./Facebook.css"

const Fb = (props) => {
    return (
        <div className='container'>
            <div className="logo"><span className="Username">{props.fb.logo}<img src="https://img.icons8.com/ios/50/ffffff/facebook-new.png"/></span></div>
            <div className="section-one">
                <div className="username"><span className="Username">{props.fb.username}</span></div>
                <div className="fbid"><span className="fbidname">{props.fb.fbid}</span></div>
            </div>
            <div className="content">{props.fb.post}</div>
            <div className="action">
                <button onClick={() => props.handleLike(props.fb.id)}>< img src="https://raw.githubusercontent.com/Avirup2812/AvirupSaha/main/thumb_up_black_24dp.svg" /></button>
                <button onClick={() => props.handleDislike(props.fb.id)}>< img src="https://raw.githubusercontent.com/Avirup2812/AvirupSaha/main/thumb_down_black_24dp.svg" /></button>
                <span className="badge">{props.fb.likes}</span>
            </div>
        </div>
    )
}

export default Fb