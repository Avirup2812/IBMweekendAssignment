// import React from 'react'
// import "./components/Navbar.css";
// const App = () => {
//     return (
//         <><div class="container">
//             <div class="content">
//                 <div class="contentHead">WE'RE </div><br></br><div class="contentHead2">COMING <p>SOON</p></div>
//                 <br></br><br></br>
//                 <div class="scndtext"> Hello fellow shoppers! We're currently
//                     building our<br></br><br></br> new fashion store. Add your email below to stay
//                     up-<br></br><br></br>to-date with announcements and our launch deals.</div>
//                     <br></br><br></br>
//                 <div class="emailBox">Email Address
//                 {/* <div class="arrow">
//                     <img src="https://raw.githubusercontent.com/Avirup2812/AvirupSaha/main/icon-arrow.svg"/>
//                 </div> */}
//                 </div>

//             </div>
//             <div class="app">

//                 <img src="https://github.com/Avirup2812/AvirupSaha/blob/main/hero-desktop.jpg?raw=true" />
//             </div></div>
//         </>
//     )
// }

// export default App

// import React, { useState } from 'react';

// const App = () => {
//     const [count, setCount] = useState(0);
//     const handleClick = () => {
//         setCount(count + 1);
//     }
//     return (<>
//         <h1>{count}</h1>
//         <button onClick={handleClick}>Counter for adding </button>
//     </>)
// }
// export default App


// import React, { useState } from 'react';

// const App = () => {
//     const [count, setCount] = useState(0);
//     const handleClick = () => {
//         setCount(count + 1);
//     }
//     return (<>
//         <h1>{count}</h1>
//         <button onClick={handleClick}>Counter for adding </button>
//     </>)
// }
// export default App

// import React, { useState } from 'react';//using two counter for increment and decrement

// const App = () => {
//     const [count, setCount] = useState({
//         count1:0,count2:7});

//         const handInc=()=>{
//             setCount({...count,count1:count.count1+1});
//             console.log(count.count1);
//         }
//         const handDec=()=>{
//             setCount({...count,count2:count.count2-1});
//             console.log(count.count2);
//         }


//     return (<>
//         <h1>{count.count1}</h1>
//         <button onClick={handInc}>Click for adding </button>
//         <h1>{count.count2}</h1>
//         <button onClick={handDec}>Click for deleteing </button>
//     </>)
// }
// export default App



// import React, { useState } from 'react';//using one counter for addition and deletion

// const App = () => {
//     const [count, setCount] = useState({
//         count1:0});

//         const handInc=()=>{
//             setCount({...count,count1:count.count1+1});
//             // console.log(count.count1);
//         }
//         const handDec=()=>{
//             setCount({...count,count1:count.count1-1});
//             // console.log(count.count1);
//         }


//     return (<>
//         <h1>{count.count1}</h1>
//         <button onClick={handInc}>Click for adding </button>
//         {/* <h1>{count.count1}</h1> */}
//         <button onClick={handDec}>Click for deleteing </button>
//     </>)
// }
// export default App



// import React, { useState } from "react";
// const App = () => {
//     const [count, setCount] = useState({
//         count1: 0, count2: 7
//     });
//     const handleClick = (countValue) => {
//         if (countValue === 1) {
//             setCount({
//                 ...count, count1: count.count1 + 1
//             })
//         }
//         else if (countValue === 2) {
//             setCount({ ...count, count2: count.count2 + 2 })
//         }
//     }
//     return (
//         <>
//             <h1>{count.count1}</h1>
//             <button onClick={() => handleClick(1)}>+1</button>
//             <h2>{count.count2}</h2>
//             <button onClick={() => handleClick(2)}>+2</button>

//         </>
//     )
// }
// export default App

//in app.js >> 
// import React from "react";
// import Navbar from "./components/Navbar";

// const App = () => {

//     return (
//         <>
//             <h1>Bevarages</h1>
//             <Navbar firstBev="Coffee" secondBev="Tea" thirdBev="Green Tea"/>
//             <hr />
//             <h1>Snacks</h1>
//             <Navbar firstBev="Lays" secondBev="Kurkure" thirdBev="Too yumm"/>
//         </>
//     )
// }
// export default App


// import React from "react";
// import Card from './components/Card';

// const App=()=>
// {
//     return(
//         <>
//         <div className="cardDesign">
//         <Card title="Today's Money" num="$53,000" logo="https://img.icons8.com/ios-filled/50/ffffff/creative-commons-commercial.png" percentage="+55%"/>
//         <Card title="Today's Users" num="2,300" logo="https://img.icons8.com/material-rounded/24/ffffff/globe--v1.png" percentage="+3%"/>
//         <Card title="New Clients" num="+3,462" logo="https://img.icons8.com/fluency-systems-filled/48/ffffff/trophy.png" percentage1="-2%"/>
//         <Card title="Sales" num="$103,430" logo="https://img.icons8.com/material-rounded/24/ffffff/shopping-cart.png" percentage="+5%"/>
//         </div>
//         </>
//     )
// }
// export default App


// import React, { useState} from 'react'
// import Contacts from './components/Contact/Contacts'

// const App = () => {
//   // Name State
//   const [newName, setNewName] = useState("")
//   // Email State
//   const [newEmail, setNewEmail] = useState("")
//   // Contacts State
//   const [contacts, setContacts] = useState([
//     {name:"Ram",email:"r@r.com"},
//     {name:"Shyam",email:"s@s.com"},
//     {name:"Ghanshyam",email:"g@g.com"},
//   ])
//   // Handling Name
//   const handleNameChange=(event)=>{
//     setNewName(event.target.value);
//   }
//   // Handling Email
//   const handleEmailChange=(event)=>{
//     setNewEmail(event.target.value)
//   }
//   // Adding Contact
//   const handleContactSubmit=()=>{
//     setContacts([...contacts,{name:newName,email:newEmail}]);
//     setNewName("");
//     setNewEmail("");
//   }
//   // Handling Delete
//   const handleDelete=(emailId)=>{
//     const newContacts=contacts.filter(item=>item.email!==emailId);
//     setContacts(newContacts);
//   }
//   // Handling Edit
//   const handleEdit=(emailId)=>{
//     const newContacts=[...contacts];
//     const index=newContacts.findIndex(el=>el.email==emailId);
//     newContacts[index]={name:newName,email:newEmail};
//     setContacts(newContacts);
//     setNewName("");
//     setNewEmail("");
//   }
//   return (
//     <>
//     <div className="container">
//     <form>
//       <div className="row">
//         <div className="col">
//           <input type="text" className="form-control" placeholder="Full Name" aria-label="Full Name" onChange={handleNameChange} value={newName}/>
//        </div>
//       <div className="col">
//         <input type="text" className="form-control" placeholder="Email" aria-label="Email" onChange={handleEmailChange} value={newEmail}/>
//       </div>
//     </div>
//     <button type="button" className="btn btn-primary mt-3" onClick={handleContactSubmit}>Add Contact</button>
//       </form>
//     </div>
//     <Contacts contacts={contacts} handleDelete={handleDelete} handleEdit={handleEdit}/>
//     </>
//   )
// }

// export default App


import React from 'react';
import Select from 'react-select';

const actions = [
    { label: "Desktop PC", value: 1 },
    { label: "Laptop", value: 2 },
    { label: "Tablet", value: 3 },
    { label: "Mobile", value: 4 },
    { label: "Speaker", value: 5 }
    
];

const App = () => (
    <div className="container">
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <Select options={actions} />
            </div>
            <div className="col"></div>
        </div>
    </div>
);

export default App