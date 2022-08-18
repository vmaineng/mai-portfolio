import React from 'react'
import Profile from '../components/Profile'
import {Link} from 'react-router-dom';

function ProfilePage() {
  return (
    <div>ProfilePage
          <Profile />
        <Link to='/profile' className='btn'>
        Profile
        </Link>
    </div>
  )
}

export default ProfilePage