import React, { useState, useEffect } from 'react'
import { CheckSession } from '../Services/Auth'


function Profile() {
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [showEditProfile, setShowEditProfile] = useState(false)

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
      console.log(user)
    }
    fetchUser()
  }, [])

  const handleEditProfile = () => {
    window.location.href = '/EditProfile'
  }

  if (loading) {
    return <p> Loading... </p>
  }

  if (error) {
    return <p> Error: { error.message } </p>
  }

  return (
    <div>
      <h2> Welcome back, { user.email }! </h2>
      <button onClick={ handleEditProfile }> Edit Profile </button>
    </div>
  )
}


export default Profile;
  