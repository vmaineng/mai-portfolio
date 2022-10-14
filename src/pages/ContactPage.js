import React, {useState, useEffect} from 'react'
import Contact from '../components/Contact'


function ContactPage() {
const [contacts, setContact] = useState([]);

useEffect(() => {
  fetch('http://localhost:4000/profile')
  .then(r => r.json())
  .then(setContact)
}, [])

const contactCard = contacts.map((contact) =>
<Contact key={contact.id} contact={contact}/> )

  return (
    <div>
         
    {contactCard}
    
    </div>
  )
}

export default ContactPage