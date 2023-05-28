import { useState } from "react"

export default function SimpleCounter(props){
    const {countbutton, handleClickbutton} = props
    //Prop object bata value read gareko

    return (
        <div>
            <button onClick={handleClickbutton}>
                Plus
            </button> {countbutton}
        </div>
    )
}