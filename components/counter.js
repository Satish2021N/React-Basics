'use client'
import { useState } from "react"

//By default next js bata banako component server side ma render huncha to render it in client side we need to use use client

function Counter(){
    const [left, setleft] = useState(0); //Initial state is defined to zero
    const [right, setright] = useState(0);
    //useState is a react component / hook, where we can define state that needs to import
    //To be a react component it needs to have a return statement


    const [allClicks, setAll] = useState([])

    //For clicks

    const [totalclicks, setTotal] = useState(0);
    //Object type state
    //State can be objects, arrays
    //Complex State
    //Now we need to update the object
    const[clicks,setClicks] = useState({left:0, right:0})

    const handleft = () =>{
        //State lai directly modify garna mildaina
        setClicks({
            left:clicks.left+1,
            right:clicks.right
        })
        setAll(
            allClicks.concat('L')
            
        )
        setTotal(totalclicks+1)
    }
    const handright = () =>{
        //State lai directly modify garna mildaina
        // setright(right+1)
        setClicks({
            ...clicks,
            right:clicks.right+1
        })
        setAll(
            allClicks.concat('R')
        )
        setTotal(totalclicks+1)
    }
    return  (
    <>
        <h2> Second Class of React</h2>
        <h2> Stateful Component</h2>

        {clicks.left} <button onClick={handleft}> left</button>
        <button onClick={handright}> right</button> {clicks.right}
        <p>{allClicks}</p>
        <p> total clicks {totalclicks}</p>
    </>

    )
    
    
}
export default Counter

//TO be render it needs to exported