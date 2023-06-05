'use client'
//By default the react components gets render in the server side.
//use client --> Yo particular component client side ma render huncha vanera vancha.

//Stateful componnets
//-- user le interaction garna sakne component haru.
//--User le interaction garne sakne chich haru lai track garnu parcha

//Functional component (Statless)
//- For static pages
//- User le interaction garna nasakne

import { useState } from "react"
import Feedback from "@/components/Feedback"
import Counter from "@/components/counter"
import SimpleCounter from "@/components/BasicCounter"
import Notes from "@/components/Notes"
import Contact from "@/components/contact"
import NavBar from "@/components/navbar"

//Export helps in exporting react components

export default function Home() {
//Exporting the state and function of child basic counter
const [countbutton, setCountbutton] = useState(0);
const handleClickbutton = function ()
{
    setCountbutton(countbutton+1);
}

//Exporting the  state and function from notes.js
//Creating list of objects
const notes = [
  {
    id:1,
    desc: 'css with tailwind is nice',
    important : true
  },
  {
    id : 2,
    desc : 'js with react is good',
    important :false
  },
  {
    id:3,
    desc:"today is chill",
    important:false
  }
]
const Contacts = [
  {
    id:1,
    name:'Lionel Messi',
    number:'9841789022'
  },
  {
    id : 2,
    name : 'Andres Iniesta',
    number: '9666666666'
  },
  {
    id : 3,
    name : 'Pique',
    number :'55555555'
  }
]

  const name = "Ram"
  const [count, setCount] = useState(0) 
  const handlePlus = function(){
    // alert('You Clicked the Button')
    setCount(count+1)
  }
  const handleMinus = function(){
    // alert('You Clicked the Button')
    if(count>0)
    setCount(count-1)
  }
  //Differnt type of variable called hook/state variable using useState function
  //setCount ---> variable lai change garne method, set of functions through change garnu parcha
  return (

    //React Component
    // <h1> Welcome to React</h1>
    //React treats every html element as a component
    //JSX --> Javascript XML
    /*
      - 
    */
   //one single home component can only return one component
   //we can return multiple componetns by wrapping in one single component

   <div>
    <h1> Welcome to React</h1>
    <p> I am learning react</p>
    <p> Hi {name}</p>
    <h2> You Clicked {count} times.</h2>
    <button onClick={handlePlus}> 
      Plus
    </button>
    <button onClick={handleMinus}> 
      Minus
    </button>
    <button onClick={()=> setCount(0)}>
      Reset
    </button>
    <Feedback />
    <NavBar />
    <hr></hr>
    <Counter />
    <hr></hr>
    <h1> SimpleCounter</h1>
    <SimpleCounter count = {countbutton} handleClickbutton = {handleClickbutton}/>
    <br>
    </br>
    <SimpleCounter count = {countbutton} handleClickbutton = {handleClickbutton}/>
    <hr></hr>
<Notes />
    <Contact contacts={Contacts}/>

   </div>
   //notes is props object that we are sending 
   //Stateful component ---> components that tracks the component state we use hooks
  )
}
