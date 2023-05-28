import { useState } from "react"

export default function Notes(props){ //receving the notes props objects through props
        // const {notes} = props //props ko value read gareko 
    const [notes, setNotes] = useState(props.notes)
    const [desc, setDesc] = useState('') //Setting the type to string
    //Updates the notes i.e note 
    //User le typegareko event object bata aucha
    const [showAll, setShowAll] = useState(true)
    const  handleChange = function (event){
        setDesc(event.target.value)
    }
    const notesToshow = showAll? notes : notes.filter(note => note.important)
    const handleAdd = function(event){
        //Need to prevent default behaviour that is when the button is clicked the page gets reload automatically
        event.preventDefault()
        //Create the objects that gets add into the notes
        const newNote = {
            id: notes.length+1,
            desc:desc,
            important:Math.random() <0.5
        }
        setNotes(notes.concat(newNote))
    }
    const handleDelete = (noteId) => {
        if(window.confirm(`Are you confirm to delete note with id ${noteId}`))
        {
            setNotes(notes.filter(note => note.id !== noteId))
        }
    }
    
    return (
        <div>
            <h2>Notes</h2>
            <button onClick={()=> setShowAll(!showAll)}> show {showAll? 'important' : 'all'} </button>
            <ul>
            {
                notesToshow.map(note => 
                <li key={note.id}> 
                    {note.desc} <span> </span>
                    <button onClick={() =>handleDelete(note.id)}> delete</button>
                </li>)
            }
            </ul>
         
            <br></br>
            
            <form>
                
                <input type="text" value={desc} onChange={handleChange}/>
             
                 <span></span>
                <button onClick={handleAdd}> Add</button>
            </form>
        </div>
    )
}
//The form component first must be handled by react 