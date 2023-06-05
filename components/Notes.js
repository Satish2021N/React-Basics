import { useEffect, useState } from "react"
import axios from "axios";

export default function Notes(){ //receving the notes props objects through props
        // const {notes} = props //props ko value read gareko 
    const [notes, setNotes] = useState([])
    const [desc, setDesc] = useState('') //Setting the type to string
    //Updates the notes i.e note 
    //User le typegareko event object bata aucha
    const [showAll, setShowAll] = useState(true)
    const  handleChange = function (event){
        setDesc(event.target.value)
    }
    const [targetNote, setTargetNote] = useState({}) //Target note of type object
    const [isEdit, setIsEdit] = useState(false)
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
        axios.post(baseURL, newNote)
        .then(response =>{
            console.log(response.data)
            setNotes(notes.concat(response.data))
        })
        setNotes('')
    }
    const handleDelete = function(noteId){
        if(window.confirm(`Are you confirm to delete note with id ${noteId}`))
        {
            axios.delete(`${baseUrl}/${noteId}`)
            .then(response => {
                setNotes(notes.filter(note => note.id !== noteId))
            })
        }
    }
    const handleEdit = function(noteId){
        const noteToUpdate = notes.find(n => n.id === noteId)
        setDesc(noteToUpdate.desc)
        setTargetNote(noteToUpdate)
        setDesc(notes.find(n=>n.id === noteId).desc)
        setIsEdit(true)
    }
    const handleSave = function (event){
        event.preventDefault();
        setNotes(notes.map(n=>n.id === targetNote.id? { ...targetNote, desc: desc}
            :n)
        )
        setDesc('')
        setIsEdit(false)
    }

    useEffect(() => {
        axios.get('http://localhost:4000/notes')
        .then(response =>{
            console.log(response)
            setNotes(response.data)
        })
    },[])
    
    return (
        
        <div>
            <h2>Notes</h2>
            <button onClick={()=> setShowAll(!showAll)}> show {showAll? 'important' : 'all'} </button>
            <ul>
            {
                notesToshow.map(note => 
                <li key={note.id}> 
                    {''}
                    {note.desc} <span> </span>
                    <button onClick={() =>handleDelete(note.id)}> delete</button>
                    <button onClick={()=>handleEdit(note.id)}>Edit</button>
                </li>)
            }
            </ul>
         
            <br></br>
            
            <form>
                
                <input type="text" value={desc} onChange={handleChange}/>
                {' '}
                {
                    isEdit
                    ? 
                    <button onClick ={handleSave}> save </button> :
                    <button onClick={handleAdd}> Save</button>
                }
             
                 <span></span>
              

                
            </form>
        </div>
    )
}
//The form component first must be handled by react 