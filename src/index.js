// import React, {Component} from "react"; //class based component
// import ReactDOM from "react-dom";
// class Greet extends React.Component{
//   render(){
// return <h1>Hello</h1>
//   }
// }
// ReactDOM.render(<Greet/>,document.getElementById('root'));

// import React from "react";
// import  ReactDOM  from "react-dom";// functional component
// const Element=()=>{
//   return <h1>Hello</h1>
// }
// ReactDOM.render(<Element/>,document.getElementById('root'));

// import React from "react";
// import  ReactDOM  from "react-dom";// functional component
// const Element=()=>{
// const OddEven=()=>{
//   let a=10;

//   if (a%2==0)
//   {
//     return "Even";
//   }
//   else{
//     return "odd";
//   }
// }
//   return(
//   <><h1>The number is: {OddEven()}</h1></>
//   )
// }
// ReactDOM.render(<Element/>,document.getElementById('root'));



// import React from "react";//array using map
// import  ReactDOM  from "react-dom";
// const Element=()=>{
//   const newArray=[1,2,3,4,5,6,7];
//   const mapArray = newArray.map(a=>a+" ");
//   return mapArray;
// }
// ReactDOM.render(<Element/>,document.getElementById('root'));


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import Navbar from "./components/Navbar";
// const Element = () => {
//   return (
//     <>

//      <Navbar/>
//      <App/>
//     </>
//   )
// }
// ReactDOM.render(<Element />, document.getElementById('root'));


// import React from "react";//Event handler
// import ReactDOM from "react-dom";
// const Element = () => {
//   const handleClick=()=>{
//     console.log("Hello");
//   }
//   return (
//     <>
//     <button onClick={handleClick}>Click Me</button>
//     </>
//   )
// }
// ReactDOM.render(<Element />, document.getElementById('root'));

//in index.js

// import React from "react";
// import ReactDOM from "react-dom";
// // import Shopping from "./components/Shopping Cart/Shopping";
// //import Controlinput from"./components/Controlinput";
// // import Facebook from "./components/Facebook/Facebook";
// //import Example from "./components/Example";
// //import ControlForm from "./components/ControlForm";
// //import Tweets from "./components/Twitter/Tweets";
// //  import App from "./App";
// import ContactCrudApp from "./components/Contactcrud/ContactCrudApp";

// const Element = () => {
//   return (
//     <>

//       <ContactCrudApp />
//       {/* <App/> */}
//       {/* <Tweets/> */}
//       {/* <Facebook /> */}
//       {/* <Controlinput/>*/}
//       {/*<Example/> */}
//       {/* <ControlForm /> */}

//     </>
//   )
// }
// ReactDOM.render(<Element />, document.getElementById('root'));



import React from "react";
import ReactDOM from "react-dom";
import CartManagement from "./CartManagement/CartManagement";

const Element = () => {
  return (
    <>
      <CartManagement />
    </>
  )
}
ReactDOM.render(<Element />, document.getElementById('root'));
