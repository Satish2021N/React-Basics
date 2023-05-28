
export default function Contact(props){
    const {contacts} = props

    return (
        <div>
            <h1> Contacts</h1>
            
            {
           contacts.map(contact =>
            <li key={contact.id}> 
                {contact.number} 
            </li>)
            //Map is javascript function to transfrom list or change the whole list.
            //To add javascript in jsx we need to use curly braces
            }
 
        </div>
    )
111
}