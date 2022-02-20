import React from 'react';

export default function Header(props) {
  return (
    <div className="cartHead">
      <div className="cartManagementHead">
          <div  className="cartHeadTitle">Online Shopping Plateform</div >
          <div className="navItem">
            <div className="home">Home</div>
            <div className="contact">Contact</div>
            <div className="about">About</div>
        <span className="signIn">SignIn/Login</span>
         <div class="navCart"><img src="https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png" alt="cart pic"/><sup>    {props.countCartItems}</sup>
             </div>
      </div>
      </div>
    </div>
  );
}