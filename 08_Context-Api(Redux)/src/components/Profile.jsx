import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)
  return (
    user? <div> Welcome User: {user.username}</div> : <div>Please Login!</div>
  )
}

export default Profile