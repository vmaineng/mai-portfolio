import React from 'react'


function Profile({profile}) {
  return (
    <div>Profile
{profile.name}
 {profile.location}
 {profile.bio}
 {profile.skills}
    <p> Contact me
        <li>Github</li>
        <li>Linkedin</li>
    </p>
    </div>
  )
}

export default Profile