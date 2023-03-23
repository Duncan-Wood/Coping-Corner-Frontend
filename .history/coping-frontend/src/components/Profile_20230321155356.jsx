import React, { useState, useEffect } from 'react'
import { CheckSession } from '../Services/Auth'
import { useContext } from 'react-router-dom'

function Profile() {
    const context = useContext()
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await CheckSession()
        setUser(user)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  const handleEditProfile = () => {
    context.push('/edit-profile')
  }

  if (loading) {
    return <p> Loading... </p>
  }

  if (error) {
    return <p> Error: { error.message } </p>
  }

  return (
    <div>
      <h2> Profile </h2>
      { user.profilePic && <img src={ user.profilePic } alt="Profile Picture" /> }
      <p> Username: { user.username } </p>
      <p> Email: { user.email } </p>
      <p> Password: { user.password_digest } </p>
      <button onClick={ handleEditProfile }> Edit Profile </button>
    </div>
  )
}


export default Profile;
  