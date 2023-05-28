'user client'
import { New_Tegomin } from "next/font/google"
import { useState } from "react"

const Statistics = (props) =>{
    console.log(props)
}

// const Button = function (){
//     return <button onClick={}>{}</button>
// }
export default function Feedback(){
    const [good, setCount] = useState(0) 
    const [neutral, setCount1] = useState(0) //Initial State is set to zero
    //If we need to update the vairable we need to do it through set function
    const [bad, setCount2] = useState(0) 

    const goodCount = function(){
        setCount(good+1)
    }
    const neutralCount = function(){
        setCount1(neutral+1)
    }
    const badCount = function(){
        setCount2(bad+1)
    }
    return(
        <div>
            <h2> Give your Feedback</h2>
            <button onClick={goodCount}>
                Good
            </button>
            <button onClick={neutralCount}>
                neutral
            </button>
            <button onClick={badCount}>
                Bad
            </button>
            <h2> Statistics</h2>
            <p> good <span> {good}</span></p>
            <p> neutral <span> {neutral}</span></p>
            <p> bad <span> {bad}</span></p>
            <p> All <span> {good+bad+neutral}</span></p>
            <p> Average <span> {(good+bad+neutral)/3}</span></p>
            
        </div>
    )
}