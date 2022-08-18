import React, {useState, useEffect} from 'react'
import Profile from '../components/Profile'


function ProfilePage() {
const [profiles, setProfile] = useState([]);

useEffect(() => {
  fetch('http://localhost:4000/profile')
  .then(r => r.json())
  .then(setProfile)
}, [])

const profileCard = profiles.map((profile) =>
<Profile  profile={profile}/> )

  return (
    <div>ProfilePage
         
    {profileCard}
    
    </div>
  )
}

export default ProfilePage