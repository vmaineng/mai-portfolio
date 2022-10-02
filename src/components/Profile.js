import React from 'react'
import ContactForm from './ContactForm';


function Profile({profile}) {
  return (
    <div>Profile
{profile.name}
{profile.location}

    <ContactForm />
    </div>
  )
}

export default Profile